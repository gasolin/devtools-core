## Network Monitor
Network monitor for developers.

**WARNING:** This is a prove of concept version, far from the production.

## Publishing to M-C
TBD

## Temporary hacks (NEED FIX)

* disabled RequestListContextMenu in request-list-content
* move devtools/shared/ to netmonitor/src/shared/common/
* move devtools/client/shared to netmonitor/src/shared/client/

## Current yarn start logs

```
ERROR in ./src/netmonitor-controller.js
Module not found: Error: Cannot resolve module 'devtools/shared/fronts/timeline' in /home/gasolin/devtools-core/packages/netmonitor/src
 @ ./src/netmonitor-controller.js 9:26-68

ERROR in ./~/react-dom/index.js
Module not found: Error: Cannot resolve module 'react/lib/ReactUMDEntry/lib/ReactDOM' in /home/gasolin/devtools-core/packages/netmonitor/node_modules/react-dom
 @ ./~/react-dom/index.js 3:17-46

ERROR in ./src/components/statistics-panel.js
Module not found: Error: Cannot resolve module 'devtools/shared/plural-form' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/statistics-panel.js 14:23-61

ERROR in ./src/shared/client/prefs.js
Module not found: Error: Cannot resolve module 'devtools/shared/event-emitter' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client
 @ ./src/shared/client/prefs.js 7:21-61

ERROR in ./src/components/toolbar.js
Module not found: Error: Cannot resolve module 'devtools/shared/plural-form' in /home/gasolin/devtools-core/packages/netmonitor/src/components
 @ ./src/components/toolbar.js 14:23-61

ERROR in ./src/utils/l10n.js
Module not found: Error: Cannot resolve module 'devtools/shared/l10n' in /home/gasolin/devtools-core/packages/netmonitor/src/utils
 @ ./src/utils/l10n.js 7:31-62

ERROR in ./src/shared/client/widgets/Chart.js
Module not found: Error: Cannot resolve module 'devtools/shared/event-emitter' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client/widgets
 @ ./src/shared/client/widgets/Chart.js 15:21-61

ERROR in ./src/shared/client/widgets/Chart.js
Module not found: Error: Cannot resolve module 'devtools/shared/l10n' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client/widgets
 @ ./src/shared/client/widgets/Chart.js 16:31-62

ERROR in ./src/request-list-tooltip.js
Module not found: Error: Cannot resolve module 'devtools/client/shared/widgets/tooltip/ImageTooltipHelper' in /home/gasolin/devtools-core/packages/netmonitor/src
 @ ./src/request-list-tooltip.js 104:4-72

ERROR in ./src/shared/client/key-shortcuts.js
Module not found: Error: Cannot resolve module 'devtools/shared/event-emitter' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client
 @ ./src/shared/client/key-shortcuts.js 8:21-61

ERROR in ./src/shared/client/widgets/tooltip/HTMLTooltip.js
Module not found: Error: Cannot resolve module 'devtools/shared/event-emitter' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client/widgets/tooltip
 @ ./src/shared/client/widgets/tooltip/HTMLTooltip.js 9:21-61

ERROR in ./src/shared/client/widgets/tooltip/HTMLTooltip.js
Module not found: Error: Cannot resolve module 'devtools/shared/async-utils' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client/widgets/tooltip
 @ ./src/shared/client/widgets/tooltip/HTMLTooltip.js 11:23-61

ERROR in ./src/shared/client/widgets/tooltip/HTMLTooltip.js
Module not found: Error: Cannot resolve module 'devtools/shared/task' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client/widgets/tooltip
 @ ./src/shared/client/widgets/tooltip/HTMLTooltip.js 12:17-48

ERROR in ./src/shared/client/components/tabs/tabbar.js
Module not found: Error: Cannot resolve module 'devtools/client/framework/menu' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client/components/tabs
 @ ./src/shared/client/components/tabs/tabbar.js 14:13-54

ERROR in ./src/shared/client/components/tabs/tabbar.js
Module not found: Error: Cannot resolve module 'devtools/client/framework/menu-item' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client/components/tabs
 @ ./src/shared/client/components/tabs/tabbar.js 15:17-63

ERROR in ./src/shared/client/widgets/tooltip/TooltipToggle.js
Module not found: Error: Cannot resolve module 'devtools/shared/task' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/client/widgets/tooltip
 @ ./src/shared/client/widgets/tooltip/TooltipToggle.js 9:17-48

ERROR in ./src/shared/components/mdn-link.js
Module not found: Error: Cannot resolve module 'devtools/client/framework/devtools' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/components
 @ ./src/shared/components/mdn-link.js 12:22-67

ERROR in ./src/shared/components/properties-view.js
Module not found: Error: Cannot resolve 'file' or 'directory' ../editor in /home/gasolin/devtools-core/packages/netmonitor/src/shared/components
 @ ./src/shared/components/properties-view.js 22:29-49
```
