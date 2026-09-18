// Module ID: 14573
// Function ID: 14574
// Dependencies: [14542, 14574, 14517, 14570]

// Module 14573
import _mod14542 from "module_14542" /* 14542 */;


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
  if (_mod14542(value)) {
    tmp3(14574)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14517)(arg1, value);
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
        tmp3(14570).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14570);
      }
    } catch (err) {
    }
  }
  return arg0;
};
