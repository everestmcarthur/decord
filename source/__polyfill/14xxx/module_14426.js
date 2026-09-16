// Module ID: 14426
// Function ID: 14427
// Dependencies: [14427, 14438, 14440, 14443, 14446, 14447]

// Module 14426
import withoutSetter from "withoutSetter" /* 14427 */;
import _mod14438 from "module_14438" /* 14438 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14438(arg0)) {
    if (!tmp(14440)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14443)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14446)(tmp4, arg0, str);
        if (tmp(14438)(tmp5)) {
          if (!tmp(14440)(tmp5)) {
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
        return tmp(14447)(arg0, str2);
      }
    }
  }
  return arg0;
};
