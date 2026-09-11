// Module ID: 14352
// Function ID: 14353
// Dependencies: [14353, 14355, 14362, 14385, 14373, 14387, 14383, 14388]

// Module 14352
import _mod14353 from "module_14353" /* 14353 */;
import _mod14355 from "module_14355" /* 14355 */;
import text from "text" /* 14362 */;
import _mod14385 from "module_14385" /* 14385 */;

if (!_mod14353) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14355(arg0);
    const tmp4 = text(arg1);
    if (!_mod14385) {
      if (tmp(14373)(tmp3, tmp4)) {
        const tmpResult = tmp(14387);
        return tmpResult(!tmp(14383)(tmp(14388).f, tmp3, tmp4), tmp3[tmp4]);
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
