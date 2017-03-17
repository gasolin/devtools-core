/* Any copyright is dedicated to the Public Domain.
   http://creativecommons.org/publicdomain/zero/1.0/ */

"use strict";

const { createStore } = require("redux");

// Current mockup does not support any middleware
module.exports = () => createStore;
