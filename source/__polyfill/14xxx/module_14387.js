// Module ID: 14387
// Function ID: 14388
// Dependencies: [14388, 14399, 14401, 14404, 14407, 14408]

// Module 14387
import withoutSetter from "withoutSetter" /* 14388 */;
import _mod14399 from "module_14399" /* 14399 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14399(arg0)) {
    if (!tmp(14401)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14404)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14407)(tmp4, arg0, str);
        if (tmp(14399)(tmp5)) {
          if (!tmp(14401)(tmp5)) {
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
        return tmp(14408)(arg0, str2);
      }
    }
  }
  return arg0;
};
