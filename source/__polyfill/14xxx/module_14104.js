// Module ID: 14104
// Function ID: 14105
// Dependencies: [14098, 14069, 14089]

// Module 14104
import _mod14069 from "module_14069" /* 14069 */;
import _mod14089 from "module_14089" /* 14089 */;


export default (arg0, arg1) => {
  obj = new obj(14098)(arg0, arg1);
  const tmp3 = new obj(14069)("0.0.0");
  if (obj.test(tmp3)) {
    return tmp3;
  } else {
    const tmp6 = new tmp(14069)("0.0.0-0");
    if (obj.test(tmp6)) {
      return tmp6;
    } else {
      let num = 0;
      let num3 = 0;
      let tmp9 = null;
      let tmp10 = null;
      if (0 < obj.set.length) {
        do {
          let arr = obj.set[num3];
          obj = null;
          let item = arr.forEach((semver) => {
            obj = new _mod14069(semver.semver.version);
            const operator = semver.operator;
            if (">" === operator) {
              if (0 === obj.prerelease.length) {
                obj.patch = obj.patch + 1;
              } else {
                const prerelease = obj.prerelease;
                prerelease.push(0);
              }
              obj.raw = obj.format();
            } else {
              if ("" !== operator) {
                if (">=" !== operator) {
                  if ("<" !== operator) {
                    if ("<=" !== operator) {
                      const _Error = Error;
                      const _HermesInternal = HermesInternal;
                      const error = new Error("Unexpected operation: " + semver.operator);
                      throw error;
                    }
                  }
                }
              }
              if (obj) {
                const tmp4 = !_mod14089(obj, obj);
              }
            }
          });
          let tmp13 = !obj;
          let tmp14 = tmp9;
          if (obj) {
            let tmp16 = tmp14;
            if (tmp14) {
              tmp16 = !obj(14089)(tmp14, obj);
            }
            tmp13 = tmp16;
          }
          if (!tmp13) {
            tmp14 = obj;
          }
          num3 = num + 1;
          tmp9 = tmp14;
          tmp10 = tmp14;
          num = num3;
        } while (num3 < obj.set.length);
      }
      let tmp20 = null;
      if (tmp10) {
        tmp20 = null;
        if (obj.test(tmp10)) {
          tmp20 = tmp10;
        }
      }
      return tmp20;
    }
  }
  tmp = obj;
};
