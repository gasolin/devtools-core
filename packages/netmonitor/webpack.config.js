const { toolboxConfig } = require("devtools-launchpad/index");
const getConfig = require("./bin/getConfig");
const { isDevelopment } = require("devtools-config");
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

let webpackConfig = {
  entry: {
    netmonitor: getEntry("main.js")
  },

  module: {
    loaders: [
      {
        test: /\.(png|svg)$/,
        loader: "file-loader?name=[name].[ext]",
      }
    ]
  },

  output: {
    path: path.join(__dirname, "assets/build"),
    filename: "[name].js",
    publicPath: "/assets/build",
    libraryTarget: "umd"
  },

  resolve: {
    fallback: path.join(__dirname, "node_modules"),
    alias: {
      "react": path.join(__dirname, 'node_modules/react'),
    }
  }
};

function buildConfig(envConfig) {
  // if (!isDevelopment()) {
  //   webpackConfig.output.libraryTarget = "umd";
  //   webpackConfig.plugins = [];
  // }

  let config = toolboxConfig(webpackConfig, envConfig);

  // Remove loaders from devtools-launchpad webpack config
  config.module.loaders = webpackConfig.module.loaders
    .filter((loader) => !["svg-inline"].includes(loader.loader));

  return config;
}

module.exports = buildConfig(getConfig());
