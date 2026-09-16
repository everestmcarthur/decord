// Module ID: 4895
// Function ID: 4896
// Name: ToObject
// Dependencies: [4896, 1290]

// Module 4895 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4896 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
