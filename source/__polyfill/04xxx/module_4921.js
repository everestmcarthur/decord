// Module ID: 4921
// Function ID: 4922
// Dependencies: [1282, 4869]

// Module 4921
import _mod1282 from "module_1282" /* 1282 */;
import _mod4869 from "module_4869" /* 4869 */;

let closure_2 = _mod1282("%Object.isExtensible%", true);

export default _mod1282("%Object.preventExtensions%", true) ? (function IsExtensible(arg0) {
  const tmp = _mod4869(arg0);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = closure_2(arg0);
  }
  return tmp2;
}) : (function IsExtensible(arg0) {
  return !_mod4869(arg0);
});
