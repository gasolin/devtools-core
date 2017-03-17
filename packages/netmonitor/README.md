## Network Monitor
Network monitor for developers.

**WARNING:** This is a prove of concept version, far from the production.

## Publishing to M-C
TBD

## Temporary hacks

* move devtools/shared/ to netmonitor/src/shared/common/
* move devtools/client/shared to netmonitor/src/shared/client/
* disabled RequestListContextMenu in request-list-content


## Current yarn start logs

ERROR in ./src/netmonitor-controller.js
Module not found: Error: Cannot resolve module 'devtools/shared/fronts/timeline' in /home/gasolin/devtools-core/packages/netmonitor/src
 @ ./src/netmonitor-controller.js 9:26-68

ERROR in ./src/netmonitor-controller.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/curl' in /home/gasolin/devtools-core/packages/netmonitor/src
 @ ./src/netmonitor-controller.js 10:22-60

ERROR in ./src/store.js
Module not found: Error: Cannot resolve module 'redux/middleware/thunk' in /home/gasolin/devtools-core/packages/netmonitor/src
 @ ./src/store.js 8:18-51

ERROR in ./~/react-dom/index.js
Module not found: Error: Cannot resolve module 'react/lib/ReactUMDEntry/lib/ReactDOM' in /home/gasolin/devtools-core/packages/netmonitor/node_modules/react-dom
 @ ./~/react-dom/index.js 3:17-46

ERROR in ./src/components/monitor-panel.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/components/splitter/split-box' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/monitor-panel.js 22:31-94

ERROR in ./src/components/statistics-panel.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/widgets/Chart' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/statistics-panel.js 13:18-65

ERROR in ./src/components/statistics-panel.js
Module not found: Error: Cannot resolve module 'devtools/shared/plural-form' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/statistics-panel.js 14:23-61

ERROR in ./src/utils/prefs.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/prefs' in /home/gasolin/devtools-core/packages/netmonitor/src/utils
 @ ./src/utils/prefs.js 7:24-63

ERROR in ./src/components/toolbar.js
Module not found: Error: Cannot resolve module 'devtools/shared/plural-form' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/toolbar.js 14:23-61

ERROR in ./src/components/toolbar.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/components/search-box' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/toolbar.js 29:32-87

ERROR in ./src/utils/l10n.js
Module not found: Error: Cannot resolve module 'devtools/shared/l10n' in /home/gasolin/devtools-core/packages/netmonitor/src/utils
 @ ./src/utils/l10n.js 7:31-62

ERROR in ./src/components/request-list-content.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/keycodes' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/request-list-content.js 7:21-63

ERROR in ./src/components/request-list-content.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/widgets/tooltip/HTMLTooltip' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/request-list-content.js 15:24-85

ERROR in ./src/components/request-list-header.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/widgets/view-helpers' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/request-list-header.js 10:28-82

ERROR in ./src/shared/components/tabbox-panel.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/components/tabs/tabbar' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/components
 @ ./src/shared/components/tabbox-panel.js 18:29-85

ERROR in ./src/shared/components/tabbox-panel.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/components/tabs/tabs' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/components
 @ ./src/shared/components/tabbox-panel.js 19:31-85

ERROR in ./src/request-list-tooltip.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/widgets/tooltip/ImageTooltipHelper' in /home/gasolin/devtools-core/packages/netmonitor/src
 @ ./src/request-list-tooltip.js 104:4-72

ERROR in ./src/shared/components/properties-view.js
Module not found: Error: Cannot resolve module 'devtools/client/netmonitor/shared/components/editor' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/components
 @ ./src/shared/components/properties-view.js 22:29-91

ERROR in ./src/shared/components/properties-view.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/components/search-box' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/components
 @ ./src/shared/components/properties-view.js 23:32-87

ERROR in ./src/shared/components/properties-view.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/components/tree/tree-view' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/components
 @ ./src/shared/components/properties-view.js 24:31-90

ERROR in ./src/shared/components/properties-view.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/components/tree/tree-row' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/components
 @ ./src/shared/components/properties-view.js 25:30-88

ERROR in ./src/shared/components/mdn-link.js
Module not found: Error: Cannot resolve module 'devtools/client/framework/devtools' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/components
 @ ./src/shared/components/mdn-link.js 12:22-67
