// Module ID: 14573
// Function ID: 14574
// Dependencies: [14574, 14576, 14583, 14606, 14594, 14608, 14604, 14609]

// Module 14573
import _mod14574 from "module_14574" /* 14574 */;
import _mod14576 from "module_14576" /* 14576 */;
import text from "text" /* 14583 */;
import _mod14606 from "module_14606" /* 14606 */;

if (!_mod14574) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14576(arg0);
    const tmp4 = text(arg1);
    if (!_mod14606) {
      if (tmp(14594)(tmp3, tmp4)) {
        const tmpResult = tmp(14608);
        return tmpResult(!tmp(14604)(tmp(14609).f, tmp3, tmp4), tmp3[tmp4]);
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
