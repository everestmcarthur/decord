// Module ID: 14327
// Function ID: 14328
// Dependencies: [14328, 14330, 14337, 14360, 14348, 14362, 14358, 14363]

// Module 14327
import _mod14328 from "module_14328" /* 14328 */;
import _mod14330 from "module_14330" /* 14330 */;
import text from "text" /* 14337 */;
import _mod14360 from "module_14360" /* 14360 */;

if (!_mod14328) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14330(arg0);
    const tmp4 = text(arg1);
    if (!_mod14360) {
      if (tmp(14348)(tmp3, tmp4)) {
        const tmpResult = tmp(14362);
        return tmpResult(!tmp(14358)(tmp(14363).f, tmp3, tmp4), tmp3[tmp4]);
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
