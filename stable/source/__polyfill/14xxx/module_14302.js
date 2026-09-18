// Module ID: 14302
// Function ID: 14303
// Dependencies: [14303, 14305, 14312, 14335, 14323, 14337, 14333, 14338]

// Module 14302
import _mod14303 from "module_14303" /* 14303 */;
import _mod14305 from "module_14305" /* 14305 */;
import text from "text" /* 14312 */;
import _mod14335 from "module_14335" /* 14335 */;

if (!_mod14303) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14305(arg0);
    const tmp4 = text(arg1);
    if (!_mod14335) {
      if (tmp(14323)(tmp3, tmp4)) {
        const tmpResult = tmp(14337);
        return tmpResult(!tmp(14333)(tmp(14338).f, tmp3, tmp4), tmp3[tmp4]);
      }
    } else {
      try {
        return getOwnPropertyDescriptor(tmp3, tmp4);
      } catch (err) {
      }
    }
  };
}

export const f = getOwnPropertyDescriptor;
