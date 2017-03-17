/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

const { PrefsHelper } = require("../shared/client/prefs");

/**
 * Shortcuts for accessing various network monitor preferences.
 */
exports.Prefs = new PrefsHelper("devtools.netmonitor", {
  networkDetailsWidth: ["Int", "panes-network-details-width"],
  networkDetailsHeight: ["Int", "panes-network-details-height"],
  filters: ["Json", "filters"]
});