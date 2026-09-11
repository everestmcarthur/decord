// Module ID: 14406
// Function ID: 14407
// Dependencies: [14355, 14407, 14404, 14364, 14387]

// Module 14406
import _mod14355 from "module_14355" /* 14355 */;
import text from "text" /* 14364 */;
import _mod14387 from "module_14387" /* 14387 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14407 from "module_14407" /* 14407 */;

const enumerable = "enumerable";
const configurable = "configurable";
const writable = "writable";
if (_mod14355) {
  if (_mod14407) {
    defineProperty = function defineProperty(fn, arg1, value) {
      _mod14404(fn);
      const tmp2 = text(arg1);
      _mod14404(value);
      let tmp4 = value;
      if (typeof fn === "function") {
        tmp4 = value;
        if ("prototype" === tmp2) {
          tmp4 = value;
          if ("value" in value) {
            tmp4 = value;
            if (writable in value) {
              tmp4 = value;
              if (!value[tmp5]) {
                const tmp7 = getOwnPropertyDescriptor(fn, tmp2);
                let tmp8 = tmp7;
                if (tmp7) {
                  tmp8 = tmp7[tmp5];
                }
                tmp4 = value;
                if (tmp8) {
                  fn[tmp2] = value.value;
                  const obj = { configurable: configurable in value ? value[configurable] : tmp7[configurable], enumerable: enumerable in value ? value[enumerable] : tmp7[enumerable], writable: false };
                }
              }
            }
          }
        }
      }
      return defineProperty(fn, tmp2, tmp4);
    };
  }
  let defineProperty2 = defineProperty;
} else {
  defineProperty2 = function defineProperty(arg0, arg1, value) {
    _mod14404(arg0);
    const tmp2 = text(arg1);
    _mod14404(value);
    if (!_mod14387) {
      if (!("get" in value)) {
        if (!("set" in value)) {
          if ("value" in value) {
            arg0[tmp2] = value.value;
          }
          return arg0;
        }
      }
      const tmp8 = new TypeError("Accessors not supported");
      throw tmp8;
    } else {
      try {
        return defineProperty(arg0, tmp2, value);
      } catch (err) {
      }
    }
  };
}

export const f = defineProperty2;
