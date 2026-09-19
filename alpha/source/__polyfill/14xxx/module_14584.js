// Module ID: 14584
// Function ID: 14585
// Dependencies: [14585, 14596, 14598, 14601, 14604, 14605]

// Module 14584
import withoutSetter from "withoutSetter" /* 14585 */;
import _mod14596 from "module_14596" /* 14596 */;

let closure_3 = withoutSetter("toPrimitive");

export default (arg0, arg1) => {
  if (_mod14596(arg0)) {
    if (!tmp(14598)(arg0)) {
      let str = arg1;
      const tmp4 = tmp(14601)(arg0, closure_3);
      if (tmp4) {
        if (undefined === str) {
          str = "default";
        }
        const tmp5 = tmp(14604)(tmp4, arg0, str);
        if (tmp(14596)(tmp5)) {
          if (!tmp(14598)(tmp5)) {
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
        return tmp(14605)(arg0, str2);
      }
    }
  }
  return arg0;
};
