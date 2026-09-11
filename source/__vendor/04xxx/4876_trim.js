// Module ID: 4876
// Function ID: 4877
// Name: trim
// Dependencies: [1454, 4877, 4865, 4880, 4878, 4884]

// Module 4876 (trim)
import RequireObjectCoercible from "RequireObjectCoercible" /* 4865 */;
import _mod4877 from "module_4877" /* 4877 */;
import _mod4878 from "module_4878" /* 4878 */;
import shimStringTrim from "shimStringTrim" /* 4884 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4880 */;

let closure_2 = callBind(_mod4877());
function trim(arg0) {
  RequireObjectCoercible(arg0);
  return closure_2(arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4877;
obj.implementation = _mod4878;
obj.shim = shimStringTrim;
defineProperty(trim, obj);

export default trim;
