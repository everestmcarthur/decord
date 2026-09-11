// Module ID: 14365
// Function ID: 14366
// Dependencies: [14366, 14377, 14379, 14382, 14385, 14386]

// Module 14365
import withoutSetter from "withoutSetter" /* 14366 */;
import _mod14377 from "module_14377" /* 14377 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14377(arg0)) {
    if (!tmp(14379)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14382)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14385)(tmp4, arg0, str);
        if (tmp(14377)(tmp5)) {
          if (!tmp(14379)(tmp5)) {
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
        return tmp(14386)(arg0, str2);
      }
    }
  }
  return arg0;
};
