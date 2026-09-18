// Module ID: 14357
// Function ID: 14358
// Dependencies: [14326, 14358, 14301, 14354]

// Module 14357
import _mod14326 from "module_14326" /* 14326 */;


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
  if (_mod14326(value)) {
    tmp3(14358)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14301)(arg1, value);
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
        tmp3(14354).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14354);
      }
    } catch (err) {
    }
  }
  return arg0;
};
