// Module ID: 14368
// Function ID: 14369
// Dependencies: [14352, 14353, 14369]

// Module 14368
import _mod14352 from "module_14352" /* 14352 */;
import _mod14353 from "module_14353" /* 14353 */;
import _mod14369 from "module_14369" /* 14369 */;

let prop = _mod14352["__core-js_shared__"];
if (!prop) {
  prop = _mod14353("__core-js_shared__", {});
}
let versions = prop.versions;
if (!versions) {
  const items = [];
  prop.versions = items;
  versions = items;
}
let str2 = "global";
if (_mod14369) {
  str2 = "pure";
}
versions.push({ version: "3.41.0", mode: str2, copyright: "\u00A9 2014-2025 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.41.0/LICENSE", source: "https://github.com/zloirock/core-js" });

export default prop;
