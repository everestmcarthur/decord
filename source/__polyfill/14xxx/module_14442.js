// Module ID: 14442
// Function ID: 14443
// Dependencies: [14411, 14443, 14386, 14439]

// Module 14442
import _mod14411 from "module_14411" /* 14411 */;


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
  if (_mod14411(value)) {
    tmp3(14443)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14386)(arg1, value);
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
        tmp3(14439).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14439);
      }
    } catch (err) {
    }
  }
  return arg0;
};
