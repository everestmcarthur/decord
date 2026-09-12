// Module ID: 4893
// Function ID: 4894
// Name: ToObject
// Dependencies: [4894, 1291]

// Module 4893 (ToObject)
import _mod1291 from "module_1291" /* 1291 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4894 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1291(arg0);
};
