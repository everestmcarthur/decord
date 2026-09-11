// Module ID: 14391
// Function ID: 14392
// Dependencies: [14378, 14356]

// Module 14391
import _mod14378 from "module_14378" /* 14378 */;

const re2 = /#|\.prototype\./;
function isForced(arg0, arg1) {
  if (typeof fn === "function") {
    const _String = String;
    const str3 = String(arg0).replace(re2, ".");
    const tmp5 = tmp[str3.toLowerCase(str3)];
    let tmp7 = tmp5 === P;
    if (!tmp7) {
      if (tmp5 === N) {
        tmp7 = tmp9;
      } else {
        let tmp11Result = dependencyMap;
        if (_mod14378(arg1)) {
          tmp11Result = tmp11(14356);
          let tmp11ResultResult = tmp11Result(arg1);
        } else {
          tmp11ResultResult = arg1;
        }
        tmp11 = require;
      }
    }
    return tmp7;
  } else {
    throw new TypeError("Trying to call a non-function");
  }
}
const normalize = (arg0) => {
  const str = String(arg0);
  return String(arg0).replace(re2, ".").toLowerCase();
};
isForced.normalize = normalize;
const data = {};
isForced.data = data;
isForced.NATIVE = "N";
const N = "N";
isForced.POLYFILL = "P";
const P = "P";

export default isForced;
