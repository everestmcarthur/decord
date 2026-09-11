// Module ID: 4850
// Function ID: 4851
// Name: allSettled
// Dependencies: [4851, 1454, 4852, 4880, 4853, 4928]

// Module 4850 (allSettled)
import requirePromise from "requirePromise" /* 4851 */;
import _mod4852 from "module_4852" /* 4852 */;
import _mod4853 from "module_4853" /* 4853 */;
import shimAllSettled from "shimAllSettled" /* 4928 */;
import callBind from "callBind" /* 1454 */;
import defineProperty from "defineProperty" /* 4880 */;

requirePromise();
let closure_0 = callBind(_mod4852());
function allSettled(arg0) {
  let self = this;
  if (undefined === this) {
    self = Promise;
  }
  return closure_0(self, arg0);
}
const obj = { getPolyfill: null, implementation: null, shim: null };
obj.getPolyfill = _mod4852;
obj.implementation = _mod4853;
obj.shim = shimAllSettled;
defineProperty(allSettled, obj);

export default allSettled;
