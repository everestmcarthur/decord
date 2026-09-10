// Module ID: 4862
// Function ID: 4863
// Name: ToObject
// Dependencies: [4863, 1291]

// Module 4862 (ToObject)
import _mod1291 from "module_1291" /* 1291 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4863 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1291(arg0);
};
