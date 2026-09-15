// Module ID: 14397
// Function ID: 14398
// Dependencies: [14398, 14400, 14407, 14430, 14418, 14432, 14428, 14433]

// Module 14397
import _mod14398 from "module_14398" /* 14398 */;
import _mod14400 from "module_14400" /* 14400 */;
import text from "text" /* 14407 */;
import _mod14430 from "module_14430" /* 14430 */;

if (!_mod14398) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14400(arg0);
    const tmp4 = text(arg1);
    if (!_mod14430) {
      if (tmp(14418)(tmp3, tmp4)) {
        const tmpResult = tmp(14432);
        return tmpResult(!tmp(14428)(tmp(14433).f, tmp3, tmp4), tmp3[tmp4]);
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
