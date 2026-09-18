// Module ID: 14518
// Function ID: 14519
// Dependencies: [14519, 14521, 14528, 14551, 14539, 14553, 14549, 14554]

// Module 14518
import _mod14519 from "module_14519" /* 14519 */;
import _mod14521 from "module_14521" /* 14521 */;
import text from "text" /* 14528 */;
import _mod14551 from "module_14551" /* 14551 */;

if (!_mod14519) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14521(arg0);
    const tmp4 = text(arg1);
    if (!_mod14551) {
      if (tmp(14539)(tmp3, tmp4)) {
        const tmpResult = tmp(14553);
        return tmpResult(!tmp(14549)(tmp(14554).f, tmp3, tmp4), tmp3[tmp4]);
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
