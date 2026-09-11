// Module ID: 14354
// Function ID: 14355
// Dependencies: [14355, 14357, 14364, 14387, 14375, 14389, 14385, 14390]

// Module 14354
import _mod14355 from "module_14355" /* 14355 */;
import _mod14357 from "module_14357" /* 14357 */;
import text from "text" /* 14364 */;
import _mod14387 from "module_14387" /* 14387 */;

if (!_mod14355) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14357(arg0);
    const tmp4 = text(arg1);
    if (!_mod14387) {
      if (tmp(14375)(tmp3, tmp4)) {
        const tmpResult = tmp(14389);
        return tmpResult(!tmp(14385)(tmp(14390).f, tmp3, tmp4), tmp3[tmp4]);
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
