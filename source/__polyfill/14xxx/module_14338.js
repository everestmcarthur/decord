// Module ID: 14338
// Function ID: 14339
// Dependencies: [14339, 14350, 14352, 14355, 14358, 14359]

// Module 14338
import withoutSetter from "withoutSetter" /* 14339 */;
import _mod14350 from "module_14350" /* 14350 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14350(arg0)) {
    if (!tmp(14352)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14355)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14358)(tmp4, arg0, str);
        if (tmp(14350)(tmp5)) {
          if (!tmp(14352)(tmp5)) {
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
        return tmp(14359)(arg0, str2);
      }
    }
  }
  return arg0;
};
