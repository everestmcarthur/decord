// Module ID: 4889
// Function ID: 4890
// Name: ValidateAndApplyPropertyDescriptor
// Dependencies: [4890, 4823, 1283, 4870, 4874, 4887, 4877, 4878, 4879, 4880, 4891, 4892]

// Module 4889 (ValidateAndApplyPropertyDescriptor)
import _mod4870 from "module_4870" /* 4870 */;
import _mod4890 from "module_4890" /* 4890 */;


export default function ValidateAndApplyPropertyDescriptor(arg0, arg1, flag, __Configurable__, arg4) {
  const tmp3 = _mod4890(arg0);
  if (undefined !== arg0) {
    if (!tmp(4823)(arg0)) {
      const tmp6 = new tmp(1283)("Assertion failed: O must be undefined or an Object");
      throw tmp6;
    }
  }
  if (_mod4870(arg1)) {
    if (typeof flag !== "boolean") {
      const tmp88 = new tmp(1283)("Assertion failed: extensible must be a Boolean");
      throw tmp88;
    } else if (tmp(4874)(__Configurable__)) {
      let prop = arg4;
      if (undefined !== arg4) {
        if (!tmp(4874)(prop)) {
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
            const tmpResult = tmp(4877);
            const tmpResult17 = tmp(4878);
            const tmpResult18 = tmp(4879);
            const tmpResult19 = tmp(4880);
            if (tmp67) {
              let tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, __Configurable__);
            } else {
              const obj2 = { "[[Configurable]]": __Configurable__["[[Configurable]]"], "[[Enumerable]]": __Configurable__["[[Enumerable]]"], "[[Value]]": __Configurable__["[[Value]]"], "[[Writable]]": __Configurable__["[[Writable]]"] };
              tmpResultResult = tmpResult(tmpResult17, tmpResult18, tmpResult19, arg0, arg1, obj2);
            }
            tmp67 = tmp(4887)(__Configurable__);
          }
        }
        return tmp65;
      } else {
        const obj3 = { IsAccessorDescriptor: tmp(4887), IsDataDescriptor: tmp(4878) };
        if (tmpResult20(obj3, prop)) {
          if (!prop["[[Configurable]]"]) {
            if ("[[Configurable]]" in __Configurable__) {
              if (__Configurable__["[[Configurable]]"]) {
                return false;
              }
            }
            if ("[[Enumerable]]" in __Configurable__) {
              if (!tmp(4879)(__Configurable__["[[Enumerable]]"], prop["[[Enumerable]]"])) {
                return false;
              }
            }
            if (!tmp(4892)(__Configurable__)) {
              const tmpResult21 = tmp(4879);
              if (!tmpResult21(tmp27, tmp(4887)(prop))) {
                return false;
              }
              tmp27 = tmp(4887)(__Configurable__);
            }
            if (tmp(4887)(prop)) {
              if ("[[Get]]" in __Configurable__) {
                if (!tmp(4879)(__Configurable__["[[Get]]"], prop["[[Get]]"])) {
                  return false;
                }
              }
              if ("[[Set]]" in __Configurable__) {
                if (!tmp(4879)(__Configurable__["[[Set]]"], prop["[[Set]]"])) {
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
                if (!tmp(4879)(__Configurable__["[[Value]]"], prop["[[Value]]"])) {
                  return false;
                }
              }
            }
          }
          if ("Undefined" === tmp3) {
            return tmp28;
          } else {
            if (!tmp(4878)(prop)) {
              if (tmp(4887)(prop)) {
                if (tmp(4878)(__Configurable__)) {
                  let tmp37 = prop;
                  if ("[[Configurable]]" in __Configurable__) {
                    tmp37 = __Configurable__;
                  }
                  let tmp38 = prop;
                  if ("[[Enumerable]]" in __Configurable__) {
                    tmp38 = __Configurable__;
                  }
                  const tmpResult23 = tmp(4878);
                  const tmpResult24 = tmp(4879);
                  const tmpResult25 = tmp(4880);
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
                  let tmpResult6Result = tmp(4877)(tmpResult23, tmpResult24, tmpResult25, arg0, arg1, obj);
                  const tmpResult22 = tmp(4877);
                }
              }
              const tmpResult27 = tmp(4878);
              const tmpResult26 = tmp(4877);
              tmpResult6Result = tmpResult26(tmpResult27, tmp(4879), tmp(4880), arg0, arg1, __Configurable__);
              const tmpResult28 = tmp(4879);
            }
            let tmp51 = prop;
            if ("[[Configurable]]" in __Configurable__) {
              tmp51 = __Configurable__;
            }
            let tmp52 = prop;
            if ("[[Enumerable]]" in __Configurable__) {
              tmp52 = __Configurable__;
            }
            const tmpResult30 = tmp(4878);
            const tmpResult31 = tmp(4879);
            const tmpResult32 = tmp(4880);
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
            tmpResult6Result = tmp(4877)(tmpResult30, tmpResult31, tmpResult32, arg0, arg1, obj4);
            const tmpResult29 = tmp(4877);
          }
        } else {
          const tmp24 = new tmp(1283)("`current`, when present, must be a fully populated and valid Property Descriptor");
          throw tmp24;
        }
        tmpResult20 = tmp(4891);
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
