// Module ID: 14470
// Function ID: 14471
// Dependencies: [14439, 14471, 14414, 14467]

// Module 14470
import _mod14439 from "module_14439" /* 14439 */;


export default (arg0, arg1, value, arg3) => {
  let obj = arg3;
  if (!arg3) {
    obj = {};
  }
  let flag = obj.enumerable;
  let name = arg1;
  if (undefined !== obj.name) {
    name = obj.name;
  }
  if (_mod14439(value)) {
    tmp3(14471)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14414)(arg1, value);
    }
  } else {
    try {
      if (obj.unsafe) {
        if (arg0[arg1]) {
          flag = true;
        }
      } else {
        delete tmp[tmp2];
      }
      if (flag) {
        arg0[arg1] = value;
      } else {
        const obj2 = { value, enumerable: false, configurable: !obj.nonConfigurable, writable: !obj.nonWritable };
        tmp3(14467).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14467);
      }
    } catch (err) {
    }
  }
  return arg0;
};
