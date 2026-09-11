// Module ID: 4864
// Function ID: 4865
// Name: ToObject
// Dependencies: [4865, 1291]

// Module 4864 (ToObject)
import _mod1291 from "module_1291" /* 1291 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4865 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1291(arg0);
};
