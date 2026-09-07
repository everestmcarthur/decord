// Module ID: 14368
// Function ID: 14369
// Name: setupURLPolyfill
// Dependencies: [14369, 14370, 14371, 14384]
// Exports: setupURLPolyfill

// Module 14368 (setupURLPolyfill)
import _modDef14370 from "module_14370" /* 14370 */;
import BlobModule from "BlobModule" /* 14371 */;
import URLSearchParams from "URLSearchParams" /* 14384 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 14369 */;

for (const key10016 in require("BlobModule")) {
  let tmp3 = key10016;
  arg5[key10016] = require("BlobModule")[key10016];
  continue;
}
for (const key10020 in require("URLSearchParams")) {
  let tmp4 = key10020;
  arg5[key10020] = require("URLSearchParams")[key10020];
  continue;
}

export const setupURLPolyfill = function setupURLPolyfill() {
  globalThis.REACT_NATIVE_URL_POLYFILL = "" + _modDef14370.name + "@" + _modDef14370.version;
  globalThis.URL = BlobModule.URL;
  globalThis.URLSearchParams = URLSearchParams.URLSearchParams;
};
