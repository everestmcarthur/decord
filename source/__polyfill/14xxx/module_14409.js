// Module ID: 14409
// Function ID: 14410
// Dependencies: [14378, 14410, 14353, 14406]

// Module 14409
import _mod14378 from "module_14378" /* 14378 */;


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
  if (_mod14378(value)) {
    tmp3(14410)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14353)(arg1, value);
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
        tmp3(14406).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14406);
      }
    } catch (err) {
    }
  }
  return arg0;
};
