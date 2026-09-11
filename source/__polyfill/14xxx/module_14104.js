// Module ID: 14104
// Function ID: 14105
// Dependencies: [14067, 14096, 14087, 14092, 14088, 14091, 14098, 14095]

// Module 14104
const require = globalThis.__r;


export default (arg0, arg1, arg2, arg3) => {
  let obj;
  _require = arg3;
  const tmp3 = new require("module_14067")(arg0, arg3);
  const tmp4 = new require("module_14096")(arg1, arg3);
  if (">" === arg2) {
    dependencyMap = tmp(14087);
    let tmpResult = tmp(14092);
    const tmpResult3 = tmp(14088);
    closure_2 = tmpResult3;
    let str3 = ">=";
    let str = ">";
    let tmpResult4 = tmpResult3;
  } else {
    str = "<";
    if ("<" === arg2) {
      dependencyMap = tmp(14088);
      tmpResult = tmp(14091);
      tmpResult4 = tmp(14087);
      closure_2 = tmpResult4;
      str3 = "<=";
    } else {
      const _TypeError = TypeError;
      const typeError = new TypeError("Must provide a hilo val of \"<\" or \">\"");
      throw typeError;
    }
  }
  if (require("module_14098")(tmp3, tmp4, arg3)) {
    return false;
  } else {
    let num = 0;
    let num3 = 0;
    if (0 < tmp4.set.length) {
      while (true) {
        let arr = tmp4.set[num3];
        _require = null;
        dependencyMap = null;
        let item = arr.forEach((semver) => {
          let tmp = semver;
          if (semver.semver === closure_0(semver[7]).ANY) {
            tmp = new closure_0(semver[7])(">=0.0.0");
          }
          let tmp6 = closure_0;
          if (!closure_0) {
            tmp6 = tmp;
          }
          closure_0 = tmp6;
          let tmp7 = semver;
          if (!semver) {
            tmp7 = tmp;
          }
          semver = tmp7;
          if (dependencyMap(tmp.semver, closure_0.semver, require)) {
            closure_0 = tmp;
          } else if (React2(tmp.semver, semver.semver, require)) {
            semver = tmp;
          }
        });
        if (_require.operator !== str) {
          if (_require.operator !== str3) {
            if (!dependencyMap.operator) {
              if (tmpResult(tmp3, dependencyMap.semver)) {
                obj = { v: false };
              }
            }
            let obj2;
            if (dependencyMap.operator === str3) {
              if (tmpResult4(tmp3, dependencyMap.semver)) {
                obj2 = { v: false };
              }
            }
            obj = obj2;
          }
          if (obj) {
            break;
          } else {
            num3 = num + 1;
            num = num3;
          }
        }
        obj = { v: false };
      }
      return obj.v;
    }
    return true;
  }
};
