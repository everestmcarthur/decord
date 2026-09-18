// Module ID: 14529
// Function ID: 14530
// Dependencies: [14530, 14541, 14543, 14546, 14549, 14550]

// Module 14529
import withoutSetter from "withoutSetter" /* 14530 */;
import _mod14541 from "module_14541" /* 14541 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14541(arg0)) {
    if (!tmp(14543)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14546)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14549)(tmp4, arg0, str);
        if (tmp(14541)(tmp5)) {
          if (!tmp(14543)(tmp5)) {
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
        return tmp(14550)(arg0, str2);
      }
    }
  }
  return arg0;
};
