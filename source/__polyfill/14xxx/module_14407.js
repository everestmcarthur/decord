// Module ID: 14407
// Function ID: 14408
// Dependencies: [14376, 14408, 14351, 14404]

// Module 14407
import _mod14376 from "module_14376" /* 14376 */;


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
  if (_mod14376(value)) {
    tmp3(14408)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14351)(arg1, value);
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
        tmp3(14404).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14404);
      }
    } catch (err) {
    }
  }
  return arg0;
};
