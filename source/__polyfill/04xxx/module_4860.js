// Module ID: 4860
// Function ID: 4861
// Dependencies: [1454, 4861, 1316, 4865, 4880, 4863, 4926]

// Module 4860
import callBoundIntrinsic from "callBoundIntrinsic" /* 1316 */;
import properlyBoxed from "properlyBoxed" /* 4861 */;
import _mod4863 from "module_4863" /* 4863 */;
import RequireObjectCoercible from "RequireObjectCoercible" /* 4865 */;
import shimArrayPrototypeMap from "shimArrayPrototypeMap" /* 4926 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4880 */;

let closure_2 = callBind.apply(properlyBoxed());
let closure_3 = callBoundIntrinsic("Array.prototype.slice");
function map(arg0, arg1) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0, closure_3(arguments, 1));
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = properlyBoxed;
obj.implementation = _mod4863;
obj.shim = shimArrayPrototypeMap;
defineProperty(map, obj);

export default map;
