const { CurlUtils } = require("./client/shared/curl");
const { PluralForm } = require("./shared/plural-form");
const Services = require("./client/shared/shim/Services");
const SplitBox = require("./client/shared/components/splitter/SplitBox");
// const SplitBoxCSS = require("./client/shared/components/splitter/SplitBox.css")
const sprintf = require("./shared/sprintf").sprintf;
const TreeRow = require("./client/shared/components/tree/tree-row");
const TreeView = require("./client/shared/components/tree/tree-view");
const workerUtils = require("./shared/worker-utils");

module.exports = {
  CurlUtils,
  PluralForm,
  Services,
  SplitBox,
  // SplitBoxCSS,
  sprintf,
  TreeRow,
  TreeView,
  workerUtils,
};
