// Module ID: 14423
// Function ID: 14424
// Dependencies: [14424, 14426, 14433, 14456, 14444, 14458, 14454, 14459]

// Module 14423
import _mod14424 from "module_14424" /* 14424 */;
import _mod14426 from "module_14426" /* 14426 */;
import text from "text" /* 14433 */;
import _mod14456 from "module_14456" /* 14456 */;

if (!_mod14424) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14426(arg0);
    const tmp4 = text(arg1);
    if (!_mod14456) {
      if (tmp(14444)(tmp3, tmp4)) {
        const tmpResult = tmp(14458);
        return tmpResult(!tmp(14454)(tmp(14459).f, tmp3, tmp4), tmp3[tmp4]);
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
