// Module ID: 14418
// Function ID: 14419
// Name: setupURLPolyfill
// Dependencies: [14419, 14420, 14421, 14434]
// Exports: setupURLPolyfill

// Module 14418 (setupURLPolyfill)
import _modDef14420 from "module_14420" /* 14420 */;
import _mod14421 from "module_14421" /* 14421 */;
import _mod14434 from "module_14434" /* 14434 */;
import get_ActivityIndicator from "module_14419" /* 14419 */;

const require = globalThis.__r;

for (const key10016 in require("module_14421")) {
  arg5[key10016] = require("module_14421")[key10016];
  continue;
}
for (const key10020 in require("module_14434")) {
  arg5[key10020] = require("module_14434")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14420.name + "@" + _modDef14420.version;
  globalThis.URL = _mod14421.URL;
  globalThis.URLSearchParams = _mod14434.URLSearchParams;
};
