// Module ID: 14398
// Function ID: 14399
// Dependencies: [14399, 14410, 14412, 14415, 14418, 14419]

// Module 14398
import withoutSetter from "withoutSetter" /* 14399 */;
import _mod14410 from "module_14410" /* 14410 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14410(arg0)) {
    if (!tmp(14412)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14415)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14418)(tmp4, arg0, str);
        if (tmp(14410)(tmp5)) {
          if (!tmp(14412)(tmp5)) {
            const tmp9 = new TypeError("Can't convert object to primitive value");
            throw tmp9;
          }
        }
        return tmp5;
      } else {
        let str2 = str;
        if (undefined === str) {
          str2 = "number";
        }
        return tmp(14419)(arg0, str2);
      }
    }
  }
  return arg0;
};
