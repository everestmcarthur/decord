// Module ID: 14477
// Function ID: 14478
// Dependencies: [14420, 14417, 14416, 14478, 14437, 14466, 14451, 14419, 14446]

// Module 14477
import _mod14416 from "module_14416" /* 14416 */;
import _mod14417 from "module_14417" /* 14417 */;
import _mod14419 from "module_14419" /* 14419 */;
import _mod14420 from "module_14420" /* 14420 */;
import _mod14437 from "module_14437" /* 14437 */;
import _mod14466 from "module_14466" /* 14466 */;

let closure_4 = _mod14420([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14437(arg0);
    const f = _mod14466.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14419(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14478)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14478)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14416;
        if (tmp12) {
          tmp12 = !tmp10(14446)(tmp2, tmp5, tmp9);
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
