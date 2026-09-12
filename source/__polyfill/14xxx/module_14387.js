// Module ID: 14387
// Function ID: 14388
// Dependencies: [14388, 14390, 14397, 14420, 14408, 14422, 14418, 14423]

// Module 14387
import _mod14388 from "module_14388" /* 14388 */;
import _mod14390 from "module_14390" /* 14390 */;
import text from "text" /* 14397 */;
import _mod14420 from "module_14420" /* 14420 */;

if (!_mod14388) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14390(arg0);
    const tmp4 = text(arg1);
    if (!_mod14420) {
      if (tmp(14408)(tmp3, tmp4)) {
        const tmpResult = tmp(14422);
        return tmpResult(!tmp(14418)(tmp(14423).f, tmp3, tmp4), tmp3[tmp4]);
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
