// Module ID: 4848
// Function ID: 4849
// Name: allSettled
// Dependencies: [4849, 1454, 4850, 4878, 4851, 4926]

// Module 4848 (allSettled)
import requirePromise from "requirePromise" /* 4849 */;
import _mod4850 from "module_4850" /* 4850 */;
import _mod4851 from "module_4851" /* 4851 */;
import shimAllSettled from "shimAllSettled" /* 4926 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4878 */;

requirePromise();
let closure_0 = callBind(_mod4850());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4850;
obj.implementation = _mod4851;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
