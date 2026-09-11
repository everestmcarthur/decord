// Module ID: 4922
// Function ID: 4923
// Name: ValidateAndApplyPropertyDescriptor
// Dependencies: [4923, 4856, 1283, 4903, 4907, 4920, 4910, 4911, 4912, 4913, 4924, 4925]

// Module 4922 (ValidateAndApplyPropertyDescriptor)
import _mod4903 from "module_4903" /* 4903 */;
import _mod4923 from "module_4923" /* 4923 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod4923(arg0);
  if (undefined !== arg0) {
    if (!tmp(4856)(arg0)) {
      const tmp6 = new tmp(1283)("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod4903(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new tmp(1283)("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (tmp(4907)(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!tmp(4907)(prop)) {
          const tmp20 = new tmp(1283)("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp20;
        }
      }
      if (undefined === prop) {
        let tmp65 = flag;
        if (tmp65) {
          if ("Undefined" === tmp3) {
            tmp65 = tmp66;
          } else {
            const tmpResult = tmp(4910);
            const tmpResult17 = tmp(4911);
            const tmpResult18 = tmp(4912);
            const tmpResult19 = tmp(4913);
            if (tmp67) {
              let tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, __Configurable__);
            } else {
              const obj2 = { "[[Configurable]]": __Configurable__["[[Configurable]]"], "[[Enumerable]]": __Configurable__["[[Enumerable]]"], "[[Value]]": __Configurable__["[[Value]]"], "[[Writable]]": __Configurable__["[[Writable]]"] };
              tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, obj2);
            }
            tmp67 = tmp(4920)(__Configurable__);
          }
        }
        return tmp65;
      } else {
        const obj3 = { IsAccessorDescriptor: tmp(4920), IsDataDescriptor: tmp(4911) };
        if (tmpResult20(obj3, prop)) {
          if (!prop["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!tmp(4912)(__Configurable__["[[Enumerable]]"], prop["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!tmp(4925)(__Configurable__)) {
              const tmpResult21 = tmp(4912);
              if (!tmpResult21(tmp27, tmp(4920)(prop))) {
                return false;
              }
              tmp27 = tmp(4920)(__Configurable__);
            }
            if (tmp(4920)(prop)) {
              if ("[[Get]]" in __Configurable__) {
                if (!tmp(4912)(__Configurable__["[[Get]]"], prop["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!tmp(4912)(__Configurable__["[[Set]]"], prop["[[Set]]"])) {
                  return false;
                }
              }
            } else if (!prop["[[Writable]]"]) {
              if ("[[Writable]]" in __Configurable__) {
                if (__Configurable__["[[Writable]]"]) {
                  return false;
                }
              }
              if ("[[Value]]" in __Configurable__) {
                if (!tmp(4912)(__Configurable__["[[Value]]"], prop["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp28;
          } else {
            if (!tmp(4911)(prop)) {
              if (tmp(4920)(prop)) {
                if (tmp(4911)(__Configurable__)) {
                  let tmp37 = prop;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  let tmp38 = prop;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp38 = __Configurable__;
                  }
                  const tmpResult23 = tmp(4911);
                  const tmpResult24 = tmp(4912);
                  const tmpResult25 = tmp(4913);
                  const obj = { "[[Configurable]]": tmp37["[[Configurable]]"], "[[Enumerable]]": tmp38["[[Enumerable]]"], "[[Value]]": null, "[[Writable]]": null };
                  let tmp43 = prop;
                  if ("[[Value]]" in __Configurable__) {
                    tmp43 = __Configurable__;
                  }
                  obj["[[Value]]"] = tmp43["[[Value]]"];
                  let tmp44 = prop;
                  if ("[[Writable]]" in __Configurable__) {
                    tmp44 = __Configurable__;
                  }
                  obj["[[Writable]]"] = tmp44["[[Writable]]"];
                  let tmpResult6Result = tmp(4910)(tmpResult23, tmpResult24, tmpResult25, arg0, arg1, obj);
                  const tmpResult22 = tmp(4910);
                }
              }
              const tmpResult27 = tmp(4911);
              const tmpResult26 = tmp(4910);
              tmpResult6Result = tmpResult26(tmpResult27, tmp(4912), tmp(4913), arg0, arg1, __Configurable__);
              const tmpResult28 = tmp(4912);
            }
            let tmp51 = prop;
            if ("[[Configurable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            let tmp52 = prop;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp52 = __Configurable__;
            }
            const tmpResult30 = tmp(4911);
            const tmpResult31 = tmp(4912);
            const tmpResult32 = tmp(4913);
            const obj4 = { "[[Configurable]]": tmp51["[[Configurable]]"], "[[Enumerable]]": tmp52["[[Enumerable]]"], "[[Get]]": null, "[[Set]]": null };
            let tmp57 = prop;
            if ("[[Get]]" in __Configurable__) {
              tmp57 = __Configurable__;
            }
            obj4["[[Get]]"] = tmp57["[[Get]]"];
            if ("[[Set]]" in __Configurable__) {
              prop = __Configurable__;
            }
            prop = prop["[[Set]]"];
            obj4["[[Set]]"] = prop;
            tmpResult6Result = tmp(4910)(tmpResult30, tmpResult31, tmpResult32, arg0, arg1, obj4);
            const tmpResult29 = tmp(4910);
          }
        } else {
          const tmp24 = new tmp(1283)("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult20 = tmp(4924);
      }
    } else {
      const tmp15 = new tmp(1283)("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new tmp(1283)("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};
