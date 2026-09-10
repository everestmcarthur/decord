// Module ID: 4831
// Function ID: 4832
// Name: ToObject
// Dependencies: [4832, 1291]

// Module 4831 (ToObject)
import _mod1291 from "module_1291" /* 1291 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4832 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1291(arg0);
};
