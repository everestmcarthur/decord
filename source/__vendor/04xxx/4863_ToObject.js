// Module ID: 4863
// Function ID: 4864
// Name: ToObject
// Dependencies: [4864, 1291]

// Module 4863 (ToObject)
import _mod1291 from "module_1291" /* 1291 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4864 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1291(arg0);
};
