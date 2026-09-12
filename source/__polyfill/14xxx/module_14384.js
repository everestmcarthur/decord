// Module ID: 14384
// Function ID: 14385
// Dependencies: [14385, 14386, 14387, 14424, 14425, 14441, 14442]

// Module 14384
import _mod14385 from "module_14385" /* 14385 */;
import _mod14387 from "module_14387" /* 14387 */;
import _mod14424 from "module_14424" /* 14424 */;


export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod14385;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = tmp(14386)(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = tmp(14385)[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      let tmp20 = key10024;
      if (arg0.dontCallGetSet) {
        obj = _mod14387;
        let iter = obj.f(prototype, key10024);
        value = iter;
        if (iter) {
          value = iter.value;
        }
        let tmp7 = value;
      } else {
        tmp7 = prototype[key10024];
      }
      let tmp10 = require;
      let sum = key10024;
      let tmp12 = _mod14424;
      if (!_global) {
        let str4 = "#";
        if (stat) {
          str4 = ".";
        }
        sum = target + str4 + key10024;
      }
      if (!tmp12(sum, arg0.forced)) {
        if (undefined !== tmp7) {
          if (typeof tmp21 === typeof tmp7) {
            continue;
          } else {
            let tmp22 = tmp10(14425)(tmp21, tmp7);
          }
        }
        continue;
      }
      let sham = arg0.sham;
      if (!sham) {
        let sham2 = tmp7;
        if (tmp7) {
          sham2 = tmp7.sham;
        }
        sham = sham2;
      }
      if (sham) {
        let tmp14 = tmp10(14441)(tmp21, "sham", true);
      }
      let tmp19 = tmp10(14442)(prototype, tmp20, tmp21, arg0);
      continue;
    }
  }
};
