// Module ID: 14416
// Function ID: 14417
// Dependencies: [14359, 14356, 14355, 14417, 14376, 14405, 14390, 14358, 14385]

// Module 14416
import _mod14355 from "module_14355" /* 14355 */;
import _mod14356 from "module_14356" /* 14356 */;
import _mod14358 from "module_14358" /* 14358 */;
import _mod14359 from "module_14359" /* 14359 */;
import _mod14376 from "module_14376" /* 14376 */;
import _mod14405 from "module_14405" /* 14405 */;

let closure_4 = _mod14359([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14376(arg0);
    const f = _mod14405.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14358(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14417)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14417)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14355;
        if (tmp12) {
          tmp12 = !tmp10(14385)(tmp2, tmp5, tmp9);
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
