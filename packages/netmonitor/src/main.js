const React = require("react");
const ReactDOM = require("react-dom");
const { L10N } = require("./utils/l10n");

const { getClient, firefox } = require("devtools-client-adapters");
const { bootstrap } = require("devtools-launchpad");
L10N.setBundle(require("./locales/har.properties"));
L10N.setBundle(require("./locales/netmonitor.properties"));
L10N.setBundle(require("./locales/webconsole.properties"));

require("devtools-modules/client/shared/components/splitter/SplitBox.css");
require("devtools-sham-modules/client/shared/components/tabs/tabbar.css");
require("devtools-sham-modules/client/shared/components/tabs/tabs.css");
require("devtools-modules/client/shared/components/tree/tree-view.css");
require("./styles/netmonitor.css");

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

const { NetMonitorController } = require("./netmonitor-controller");
this.NetMonitorController = NetMonitorController;

// Components
const App = React.createFactory(require("./components/network-monitor"));

// Inject EventEmitter into netmonitor window.
EventEmitter.decorate(window);

// This is the tool's root element
const root = document.createElement("div");

// Render main page layout.
ReactDOM.render(Provider({ store }, App()), root);

bootstrap(React, ReactDOM, root).then(connection => {
  if (!connection || !connection.tab) {
    return;
  }
  NetMonitorController.startupNetMonitor(connection);
});
