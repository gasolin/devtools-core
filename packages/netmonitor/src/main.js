const React = require("react");
const ReactDOM = require("react-dom");
const { L10N } = require("./utils/l10n");

const { getClient, firefox } = require("devtools-client-adapters");
const { bootstrap } = require("devtools-launchpad");
// const { getValue, isFirefoxPanel } = require("devtools-config");
L10N.setBundle(require("./locales/har.properties"));
L10N.setBundle(require("./locales/netmonitor.properties"));
L10N.setBundle(require("./locales/webconsole.properties"));

require("./shared/client/components/splitter/split-box.css");
require("./shared/client/components/tabs/tabbar.css");
require("./shared/client/components/tabs/tabs.css");
require("./shared/client/components/tree/tree-view.css");
require("./styles/netmonitor.css");

// const { onConnect, onFirefoxConnect } = require("./utils/client");

// const reducers = require("./reducers");
// const selectors = require("./selectors");

const { EventEmitter } = require("devtools-sham-modules");
const Provider = React.createFactory(require("react-redux").Provider);

const { Services: { pref }} = require("devtools-modules");
const { isDevelopment } = require("devtools-config");
if (isDevelopment()) {
  pref("devtools.webconsole.persistlog", false);
  pref("devtools.netmonitor.panes-network-details-width", 450);
  pref("devtools.netmonitor.panes-network-details-height", 50);
  pref("devtools.netmonitor.filters", JSON.stringify(["all"]));
}

const { configureStore } = require("./store");
const store = window.gStore = configureStore();
// const actions = bindActionCreators(require("./actions"), store.dispatch);

const { NetMonitorController } = require("./netmonitor-controller");
// NetMonitorController.toolbox = toolbox;
// NetMonitorController._target = toolbox.target;
this.NetMonitorController = NetMonitorController;

// Components
const App = React.createFactory(require("./components/network-monitor"));

// Inject EventEmitter into netmonitor window.
EventEmitter.decorate(window);

// if (!isFirefoxPanel()) {
//   window.L10N = L10N;
//   window.L10N.setBundle(require("./strings.json"));
// }

// This is the tool's root element
const root = document.createElement("div");

// Render main page layout.
// ReactDOM.render(MainFrame({}), root);
ReactDOM.render(Provider({ store }, App()), root);

bootstrap(React, ReactDOM, root).then(connection => {
  if (!connection || !connection.tab) {
    return;
  }
  // onConnect(conn, actions);
  NetMonitorController.startupNetMonitor(connection);
});
