// Module ID: 4979
// Function ID: 4980
// Name: ToObject
// Dependencies: [4980, 1290]

// Module 4979 (ToObject)
import _mod1290 from "module_1290" /* 1290 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4980 */;


export default function ToObject(arg0) {
  RequireObjectCoercible(arg0);
  return _mod1290(arg0);
};
