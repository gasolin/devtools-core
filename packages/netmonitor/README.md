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

Open firefox with the command

```
firefox http://localhost:8000 --start-debugger-server 6080
```

Open `localhost:8000` to see all tabs.



Or, you can manually config firefox as well.

Open `about:config`

* disable `devtools.debugger.prompt-connection` to enable connection without prompt.
* enable `devtools.debugger.remote-enabled` to allow running mozilla remote debugging protocol(rdp)

Run the command in gcli

`listen 6080 mozilla-rdp`

Then Open `localhost:8000` to see all tabs.

## Publishing to M-C
TBD

## Temporary hacks (NEED FIX)

* pass connection into NetmonitorController to get tabTarget
* disabled RequestListContextMenu in request-list-content
* disabled connectTimeline in netmonitor-controller
* disabled Editor in properties-view
* disabled MDNLink (use gDevTools)
* ~~move devtools/client/shared to netmonitor/src/shared/client/~~
  * components are moved to devtools-modules and devtools-shame-modules
* move devtools/shared/ to netmonitor/src/shared/common/
* Bug? - use devtools-sham-modules to replace { EventEmitter, KeyShortcuts, PrefsHelper, Menu, MenuItem }
