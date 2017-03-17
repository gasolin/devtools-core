const React = require("react");
const ReactDOM = require("react-dom");
// const { combineReducers } = require("redux");

const { getClient, firefox } = require("devtools-client-adapters");
const {
  renderRoot, bootstrap, L10N, unmountRoot
} = require("devtools-launchpad");
const { getValue, isFirefoxPanel } = require("devtools-config");

// const { onConnect, onFirefoxConnect } = require("./utils/client");

const reducers = require("./reducers");
const selectors = require("./selectors");

const EventEmitter = require("./shared/common/event-emitter");
// const { createFactory } = require("devtools/client/shared/vendor/react");
// const { render } = require("devtools/client/shared/vendor/react-dom");
const Provider = React.createFactory(require("react-redux").Provider);

const { configureStore } = require("./store");
const store = window.gStore = configureStore();
const actions = bindActionCreators(require("./actions"), store.dispatch);

const { NetMonitorController } = require("./netmonitor-controller");
// NetMonitorController.toolbox = toolbox;
// NetMonitorController._target = toolbox.target;
this.NetMonitorController = NetMonitorController;

// Components
const App = createFactory(require("./components/network-monitor"));

// Inject EventEmitter into netmonitor window.
// EventEmitter.decorate(window);

// if (!isFirefoxPanel()) {
//   window.L10N = L10N;
//   window.L10N.setBundle(require("./strings.json"));
// }

// This is the tool's root element
const root = document.createElement("div");

// Render main page layout.
// ReactDOM.render(MainFrame({}), root);
ReactDOM.render(Provider({ store }, App()), root);

bootstrap(React, ReactDOM, root).then(conn => {
  // onConnect(conn, actions);
  NetMonitorController.startupNetMonitor();
});
