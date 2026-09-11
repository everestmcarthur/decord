// Module ID: 14363
// Function ID: 14364
// Dependencies: [14364, 14375, 14377, 14380, 14383, 14384]

// Module 14363
import withoutSetter from "withoutSetter" /* 14364 */;
import _mod14375 from "module_14375" /* 14375 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14375(arg0)) {
    if (!tmp(14377)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14380)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14383)(tmp4, arg0, str);
        if (tmp(14375)(tmp5)) {
          if (!tmp(14377)(tmp5)) {
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
        return tmp(14384)(arg0, str2);
      }
    }
  }
  return arg0;
};
