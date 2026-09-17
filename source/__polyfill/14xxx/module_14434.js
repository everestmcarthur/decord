// Module ID: 14434
// Function ID: 14435
// Dependencies: [14435, 14446, 14448, 14451, 14454, 14455]

// Module 14434
import withoutSetter from "withoutSetter" /* 14435 */;
import _mod14446 from "module_14446" /* 14446 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14446(arg0)) {
    if (!tmp(14448)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14451)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14454)(tmp4, arg0, str);
        if (tmp(14446)(tmp5)) {
          if (!tmp(14448)(tmp5)) {
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
        return tmp(14455)(arg0, str2);
      }
    }
  }
  return arg0;
};
