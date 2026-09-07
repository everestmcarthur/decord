// Module ID: 14316
// Function ID: 14317
// Name: __core-js_shared__
// Dependencies: [14300, 14301, 14317]

// Module 14316 (__core-js_shared__)
import _mod14300 from "module_14300" /* 14300 */;
import _mod14301 from "module_14301" /* 14301 */;
import _mod14317 from "module_14317" /* 14317 */;

__core_js_shared__ = _mod14300["__core-js_shared__"];
if (!__core_js_shared__) {
  __core_js_shared__ = _mod14301("__core-js_shared__", {});
}
let versions = __core_js_shared__.versions;
if (!versions) {
  const items = [];
  __core_js_shared__.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14317) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default __core_js_shared__;
