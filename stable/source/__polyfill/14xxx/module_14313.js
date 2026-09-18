// Module ID: 14313
// Function ID: 14314
// Dependencies: [14314, 14325, 14327, 14330, 14333, 14334]

// Module 14313
import withoutSetter from "withoutSetter" /* 14314 */;
import _mod14325 from "module_14325" /* 14325 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14325(arg0)) {
    if (!tmp(14327)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14330)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14333)(tmp4, arg0, str);
        if (tmp(14325)(tmp5)) {
          if (!tmp(14327)(tmp5)) {
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
        return tmp(14334)(arg0, str2);
      }
    }
  }
  return arg0;
};
