const { toolboxConfig } = require("devtools-launchpad/index");
const getConfig = require("./bin/getConfig");
const { isDevelopment } = require("devtools-config");
const { NormalModuleReplacementPlugin } = require("webpack");
const path = require("path");
const projectPath = path.join(__dirname, "src");

/*
 * builds a path that's relative to the project path
 * returns an array so that we can prepend
 * hot-module-reloading in local development
 */
function getEntry(filename) {
  return [path.join(projectPath, filename)];
}

const webpackConfig = {
  entry: {
    netmonitor: getEntry("main.js")
  },

  output: {
    path: path.join(__dirname, "assets/build"),
    filename: "[name].js",
    publicPath: "/assets/build",
    libraryTarget: "umd"
  },

  module: {
    loaders: [
      {
        test: /\.properties$/,
        loader: require.resolve("./loaders/l10n-properties-loader"),
      },
      {
        test: /\.(png|svg)$/,
        loader: "file-loader",
      }
    ]
  },

  resolve: {
    alias: {
      "react-dom": "react-dom/dist/react-dom"
    }
  }
};

function buildConfig(envConfig) {
  if (!isDevelopment()) {
    webpackConfig.output.libraryTarget = "umd";
    webpackConfig.plugins = [];
  }

  const mappings = [
    [/\.\/mocha/, "./mochitest"],
    [/\.\.\/utils\/mocha/, "../utils/mochitest"],
    [/\.\/utils\/mocha/, "./utils/mochitest"]
  ];

  mappings.forEach(([regex, res]) => {
    webpackConfig.plugins.push(
      new NormalModuleReplacementPlugin(regex, res)
    );
  });

  // Remove loaders from devtools-launchpad webpack config
  webpackConfig.module.loaders = webpackConfig.module.loaders
    .filter((loader) => !["svg-inline"].includes(loader.loader));

  return toolbox.toolboxConfig(webpackConfig, envConfig);
}

webpackConfig.resolve = {
  alias: {
    "devtools/client/shared/vendor/react": "react",
    "devtools/client/shared/vendor/react-dom": "react-dom",
    "Services": path.join(__dirname,
      "node_modules/devtools-modules/client/shared/shim/Services"),
  }
};

const envConfig = getConfig();
module.exports = toolboxConfig(webpackConfig, envConfig);
