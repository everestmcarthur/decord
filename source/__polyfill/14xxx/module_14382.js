// Module ID: 14382
// Function ID: 14383
// Dependencies: [14351, 14383, 14326, 14379]

// Module 14382
import _mod14351 from "module_14351" /* 14351 */;


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
  if (_mod14351(value)) {
    tmp3(14383)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14326)(arg1, value);
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
        tmp3(14379).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14379);
      }
    } catch (err) {
    }
  }
  return arg0;
};
