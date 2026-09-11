// Module ID: 14420
// Function ID: 14421
// Name: setupURLPolyfill
// Dependencies: [14421, 14422, 14423, 14436]
// Exports: setupURLPolyfill

// Module 14420 (setupURLPolyfill)
import _modDef14422 from "module_14422" /* 14422 */;
import _mod14423 from "module_14423" /* 14423 */;
import _mod14436 from "module_14436" /* 14436 */;
import get_ActivityIndicator from "module_14421" /* 14421 */;

const require = globalThis.__r;

for (const key10016 in require("module_14423")) {
  arg5[key10016] = require("module_14423")[key10016];
  continue;
}
for (const key10020 in require("module_14436")) {
  arg5[key10020] = require("module_14436")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14422.name + "@" + _modDef14422.version;
  globalThis.URL = _mod14423.URL;
  globalThis.URLSearchParams = _mod14436.URLSearchParams;
};
