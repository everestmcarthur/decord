// Module ID: 14478
// Function ID: 14479
// Dependencies: [14447, 14479, 14422, 14475]

// Module 14478
import _mod14447 from "module_14447" /* 14447 */;


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
  if (_mod14447(value)) {
    tmp3(14479)(value, name, obj);
  }
  if (obj.global) {
    if (flag) {
      arg0[arg1] = value;
    } else {
      tmp3(14422)(arg1, value);
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
        tmp3(14475).f(arg0, arg1, obj2);
        const tmp3Result = tmp3(14475);
      }
    } catch (err) {
    }
  }
  return arg0;
};
