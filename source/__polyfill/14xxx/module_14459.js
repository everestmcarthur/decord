// Module ID: 14459
// Function ID: 14460
// Dependencies: [14402, 14399, 14398, 14460, 14419, 14448, 14433, 14401, 14428]

// Module 14459
import _mod14398 from "module_14398" /* 14398 */;
import _mod14399 from "module_14399" /* 14399 */;
import _mod14401 from "module_14401" /* 14401 */;
import _mod14402 from "module_14402" /* 14402 */;
import _mod14419 from "module_14419" /* 14419 */;
import _mod14448 from "module_14448" /* 14448 */;

let closure_4 = _mod14402([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14419(arg0);
    const f = _mod14448.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14401(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14460)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14460)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14398;
        if (tmp12) {
          tmp12 = !tmp10(14428)(tmp2, tmp5, tmp9);
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
