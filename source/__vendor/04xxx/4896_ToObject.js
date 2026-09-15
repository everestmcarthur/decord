// Module ID: 4896
// Function ID: 4897
// Name: ToObject
// Dependencies: [4897, 1290]

// Module 4896 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4897 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
