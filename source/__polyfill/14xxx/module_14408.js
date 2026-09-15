// Module ID: 14408
// Function ID: 14409
// Dependencies: [14409, 14420, 14422, 14425, 14428, 14429]

// Module 14408
import withoutSetter from "withoutSetter" /* 14409 */;
import _mod14420 from "module_14420" /* 14420 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14420(arg0)) {
    if (!tmp(14422)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14425)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14428)(tmp4, arg0, str);
        if (tmp(14420)(tmp5)) {
          if (!tmp(14422)(tmp5)) {
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
        return tmp(14429)(arg0, str2);
      }
    }
  }
  return arg0;
};
