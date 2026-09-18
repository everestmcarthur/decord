// Module ID: 5037
// Function ID: 5038
// Name: ValidateAndApplyPropertyDescriptor
// Dependencies: [5038, 4971, 1282, 5018, 5022, 5035, 5025, 5026, 5027, 5028, 5039, 5040]

// Module 5037 (ValidateAndApplyPropertyDescriptor)
import _mod5018 from "module_5018" /* 5018 */;
import _mod5038 from "module_5038" /* 5038 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod5038(arg0);
  if (undefined !== arg0) {
    if (!tmp(4971)(arg0)) {
      const tmp6 = new tmp(1282)("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod5018(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new tmp(1282)("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (tmp(5022)(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!tmp(5022)(prop)) {
          const tmp20 = new tmp(1282)("Assertion failed: current must be a Property Descriptor, or undefined");
          throw tmp20;
        }
      }
      if (undefined === prop) {
        let tmp65 = flag;
        if (tmp65) {
          if ("Undefined" === tmp3) {
            tmp65 = tmp66;
          } else {
            const tmpResult = tmp(5025);
            const tmpResult17 = tmp(5026);
            const tmpResult18 = tmp(5027);
            const tmpResult19 = tmp(5028);
            if (tmp67) {
              let tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, __Configurable__);
            } else {
              const obj2 = { "[[Configurable]]": __Configurable__["[[Configurable]]"], "[[Enumerable]]": __Configurable__["[[Enumerable]]"], "[[Value]]": __Configurable__["[[Value]]"], "[[Writable]]": __Configurable__["[[Writable]]"] };
              tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, obj2);
            }
            tmp67 = tmp(5035)(__Configurable__);
          }
        }
        return tmp65;
      } else {
        const obj3 = { IsAccessorDescriptor: tmp(5035), IsDataDescriptor: tmp(5026) };
        if (tmpResult20(obj3, prop)) {
          if (!prop["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!tmp(5027)(__Configurable__["[[Enumerable]]"], prop["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!tmp(5040)(__Configurable__)) {
              const tmpResult21 = tmp(5027);
              if (!tmpResult21(tmp27, tmp(5035)(prop))) {
                return false;
              }
              tmp27 = tmp(5035)(__Configurable__);
            }
            if (tmp(5035)(prop)) {
              if ("[[Get]]" in __Configurable__) {
                if (!tmp(5027)(__Configurable__["[[Get]]"], prop["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!tmp(5027)(__Configurable__["[[Set]]"], prop["[[Set]]"])) {
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
                if (!tmp(5027)(__Configurable__["[[Value]]"], prop["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp28;
          } else {
            if (!tmp(5026)(prop)) {
              if (tmp(5035)(prop)) {
                if (tmp(5026)(__Configurable__)) {
                  let tmp37 = prop;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  let tmp38 = prop;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp38 = __Configurable__;
                  }
                  const tmpResult23 = tmp(5026);
                  const tmpResult24 = tmp(5027);
                  const tmpResult25 = tmp(5028);
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
                  let tmpResult6Result = tmp(5025)(tmpResult23, tmpResult24, tmpResult25, arg0, arg1, obj);
                  const tmpResult22 = tmp(5025);
                }
              }
              const tmpResult27 = tmp(5026);
              const tmpResult26 = tmp(5025);
              tmpResult6Result = tmpResult26(tmpResult27, tmp(5027), tmp(5028), arg0, arg1, __Configurable__);
              const tmpResult28 = tmp(5027);
            }
            let tmp51 = prop;
            if ("[[Configurable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            let tmp52 = prop;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp52 = __Configurable__;
            }
            const tmpResult30 = tmp(5026);
            const tmpResult31 = tmp(5027);
            const tmpResult32 = tmp(5028);
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
            tmpResult6Result = tmp(5025)(tmpResult30, tmpResult31, tmpResult32, arg0, arg1, obj4);
            const tmpResult29 = tmp(5025);
          }
        } else {
          const tmp24 = new tmp(1282)("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult20 = tmp(5039);
      }
    } else {
      const tmp15 = new tmp(1282)("Assertion failed: Desc must be a Property Descriptor");
      throw tmp15;
    }
  } else {
    const tmp10 = new tmp(1282)("Assertion failed: P must be a Property Key");
    throw tmp10;
  }
};
