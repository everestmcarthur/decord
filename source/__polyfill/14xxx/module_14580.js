// Module ID: 14580
// Function ID: 14581
// Dependencies: [14523, 14520, 14519, 14581, 14540, 14569, 14554, 14522, 14549]

// Module 14580
import _mod14519 from "module_14519" /* 14519 */;
import _mod14520 from "module_14520" /* 14520 */;
import _mod14522 from "module_14522" /* 14522 */;
import _mod14523 from "module_14523" /* 14523 */;
import _mod14540 from "module_14540" /* 14540 */;
import _mod14569 from "module_14569" /* 14569 */;

let closure_4 = _mod14523([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14540(arg0);
    const f = _mod14569.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp5 = _mod14522(arguments[num]);
      if (f) {
        let tmp8 = tmp3(14581)(tmp5);
        let arr = closure_4(tmp8, f(tmp5));
      } else {
        arr = tmp3(14581)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp12 = _mod14519;
        if (tmp12) {
          tmp12 = !tmp10(14549)(tmp2, tmp5, tmp9);
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
