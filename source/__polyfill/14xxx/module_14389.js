// Module ID: 14389
// Function ID: 14390
// Dependencies: [14332, 14329, 14328, 14390, 14349, 14378, 14363, 14331, 14358]

// Module 14389
import _mod14328 from "module_14328" /* 14328 */;
import _mod14329 from "module_14329" /* 14329 */;
import _mod14331 from "module_14331" /* 14331 */;
import _mod14332 from "module_14332" /* 14332 */;
import _mod14349 from "module_14349" /* 14349 */;
import _mod14378 from "module_14378" /* 14378 */;

let closure_4 = _mod14332([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14349(arg0);
    const f = _mod14378.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14331(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14390)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14390)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14328;
        if (tmp12) {
          tmp12 = !tmp10(14358)(tmp2, tmp5, tmp9);
        }
        if (!tmp12) {
          tmp[tmp9] = tmp5[tmp9];
        }
      }
    }
    return tmp;
  };
}

export default assign;
