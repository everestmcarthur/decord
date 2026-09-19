// Module ID: 14570
// Function ID: 14571
// Dependencies: [14571, 14572, 14573, 14610, 14611, 14627, 14628]

// Module 14570
import _mod14571 from "module_14571" /* 14571 */;
import _mod14573 from "module_14573" /* 14573 */;
import _mod14610 from "module_14610" /* 14610 */;


export default (dontCallGetSet, obj) => {
  ({ target, global: _global, stat } = dontCallGetSet);
  const tmp3 = _mod14571;
  if (_global) {
    let prototype = tmp3;
  } else {
    let tmp4 = tmp3[target];
    if (stat) {
      if (!tmp4) {
        tmp4 = tmp(14572)(target, {});
      }
      prototype = tmp4;
    } else {
      prototype = tmp4;
      if (tmp4) {
        prototype = tmp(14571)[target].prototype;
      }
    }
  }
  if (prototype) {
    for (const key10024 in arg1) {
      let tmp21 = arg1[key10024];
      let tmp20 = key10024;
      if (arg0.dontCallGetSet) {
        obj = _mod14573;
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
      let tmp12 = _mod14610;
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
            let tmp22 = tmp10(14611)(tmp21, tmp7);
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
        let tmp14 = tmp10(14627)(tmp21, "sham", true);
      }
      let tmp19 = tmp10(14628)(prototype, tmp20, tmp21, arg0);
      continue;
    }
  }
};
