// Module ID: 14364
// Function ID: 14365
// Name: assign
// Dependencies: [14307, 14304, 14303, 14365, 14324, 14353, 14338, 14306, 14333]

// Module 14364 (assign)
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14303 */;
import _mod14304 from "module_14304" /* 14304 */;
import _mod14306 from "module_14306" /* 14306 */;
import call from "call" /* 14307 */;
import _mod14324 from "module_14324" /* 14324 */;
import _mod14353 from "module_14353" /* 14353 */;

let closure_4 = call([].concat);
if (!assign) {
  assign = function assign(arg0, arg1) {
    const tmp = _mod14324(arg0);
    const f = _mod14353.f;
    for (let num = 1; length > num; num = num + 1) {
      let tmp3 = require;
      let tmp4 = dependencyMap;
      let tmp5 = _mod14306(arguments[num]);
      let tmp6 = num;
      if (f) {
        let tmp7 = callback;
        let tmp8 = tmp3(14365)(tmp5);
        let arr = callback(tmp8, f(tmp5));
      } else {
        arr = tmp3(14365)(tmp5);
      }
      let length2 = arr.length;
      for (let num2 = 0; length2 > num2; num2 = num2 + 1) {
        let tmp9 = arr[num2];
        let tmp10 = require;
        let tmp11 = dependencyMap;
        let tmp12 = getOwnPropertyDescriptor;
        let tmp13 = num2;
        if (tmp12) {
          tmp12 = !tmp10(14333)(tmp2, tmp5, tmp9);
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
