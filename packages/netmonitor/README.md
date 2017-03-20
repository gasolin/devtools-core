## Network Monitor
Network monitor for developers.

**WARNING:** This is a prove of concept version, far from the production.

## Run on browser tab

You need `npm` and `yarn` installed before debugging the netmonitor.html

```
$ npm install -g yarn
```

Then clone the repo

```
$ git clone https://github.com/gasolin/devtools-core.git
```

Go to packages/netmonitor and run it on browser tab

```
$ cd packages/netmonitor
$ yarn install
$ yarn start
```

On Firefox

disable `devtools.debugger.prompt-connection` from `about:config` to enable connection without prompt.


## Publishing to M-C
TBD

## Temporary hacks (NEED FIX)

* disabled RequestListContextMenu in request-list-content
* disabled connectTimeline in netmonitor-controller
* disabled Editor in properties-view
* disabled MDNLink (use gDevTools)
* move devtools/client/shared to netmonitor/src/shared/client/
* move devtools/shared/ to netmonitor/src/shared/common/
* Bug? - use devtools-sham-modules to replace { EventEmitter, KeyShortcuts, PrefsHelper, Menu, MenuItem }

## Current yarn start logs

```
ERROR in ./~/react-dom/index.js
Module not found: Error: Cannot resolve module 'react/lib/ReactUMDEntry/lib/ReactDOM' in /home/gasolin/devtools-core/packages/netmonitor/node_modules/react-dom
 @ ./~/react-dom/index.js 3:17-46

ERROR in ./src/shared/common/l10n.js
Module not found: Error: Cannot resolve module 'devtools/shared/locales' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/common
 @ ./src/shared/common/l10n.js 29:18-91

ERROR in ./src/shared/common/l10n.js
Module not found: Error: Cannot resolve module 'devtools/client/locales' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/common
 @ ./src/shared/common/l10n.js 30:18-91

ERROR in ./src/shared/common/l10n.js
Module not found: Error: Cannot resolve module 'raw' in /home/gasolin/devtools-core/packages/netmonitor/src/shared/common
 @ ./src/shared/common/l10n.js 31:18-83

```
