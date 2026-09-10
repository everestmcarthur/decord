// Module ID: 4920
// Function ID: 4921
// Name: ValidateAndApplyPropertyDescriptor
// Dependencies: [4921, 4854, 1283, 4901, 4905, 4918, 4908, 4909, 4910, 4911, 4922, 4923]

// Module 4920 (ValidateAndApplyPropertyDescriptor)
import _mod4901 from "module_4901" /* 4901 */;
import _mod4921 from "module_4921" /* 4921 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod4921(arg0);
  if (undefined !== arg0) {
    if (!tmp(4854)(arg0)) {
      const tmp6 = new tmp(1283)("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod4901(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new tmp(1283)("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (tmp(4905)(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!tmp(4905)(prop)) {
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
            const tmpResult = tmp(4908);
            const tmpResult17 = tmp(4909);
            const tmpResult18 = tmp(4910);
            const tmpResult19 = tmp(4911);
            if (tmp67) {
              let tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, __Configurable__);
            } else {
              const obj2 = { "[[Configurable]]": __Configurable__["[[Configurable]]"], "[[Enumerable]]": __Configurable__["[[Enumerable]]"], "[[Value]]": __Configurable__["[[Value]]"], "[[Writable]]": __Configurable__["[[Writable]]"] };
              tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, obj2);
            }
            tmp67 = tmp(4918)(__Configurable__);
          }
        }
        return tmp65;
      } else {
        const obj3 = { IsAccessorDescriptor: tmp(4918), IsDataDescriptor: tmp(4909) };
        if (tmpResult20(obj3, prop)) {
          if (!prop["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!tmp(4910)(__Configurable__["[[Enumerable]]"], prop["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!tmp(4923)(__Configurable__)) {
              const tmpResult21 = tmp(4910);
              if (!tmpResult21(tmp27, tmp(4918)(prop))) {
                return false;
              }
              tmp27 = tmp(4918)(__Configurable__);
            }
            if (tmp(4918)(prop)) {
              if ("[[Get]]" in __Configurable__) {
                if (!tmp(4910)(__Configurable__["[[Get]]"], prop["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!tmp(4910)(__Configurable__["[[Set]]"], prop["[[Set]]"])) {
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
                if (!tmp(4910)(__Configurable__["[[Value]]"], prop["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp28;
          } else {
            if (!tmp(4909)(prop)) {
              if (tmp(4918)(prop)) {
                if (tmp(4909)(__Configurable__)) {
                  let tmp37 = prop;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  let tmp38 = prop;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp38 = __Configurable__;
                  }
                  const tmpResult23 = tmp(4909);
                  const tmpResult24 = tmp(4910);
                  const tmpResult25 = tmp(4911);
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
                  let tmpResult6Result = tmp(4908)(tmpResult23, tmpResult24, tmpResult25, arg0, arg1, obj);
                  const tmpResult22 = tmp(4908);
                }
              }
              const tmpResult27 = tmp(4909);
              const tmpResult26 = tmp(4908);
              tmpResult6Result = tmpResult26(tmpResult27, tmp(4910), tmp(4911), arg0, arg1, __Configurable__);
              const tmpResult28 = tmp(4910);
            }
            let tmp51 = prop;
            if ("[[Configurable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            let tmp52 = prop;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp52 = __Configurable__;
            }
            const tmpResult30 = tmp(4909);
            const tmpResult31 = tmp(4910);
            const tmpResult32 = tmp(4911);
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
            tmpResult6Result = tmp(4908)(tmpResult30, tmpResult31, tmpResult32, arg0, arg1, obj4);
            const tmpResult29 = tmp(4908);
          }
        } else {
          const tmp24 = new tmp(1283)("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult20 = tmp(4922);
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
