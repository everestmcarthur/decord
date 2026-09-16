// Module ID: 14415
// Function ID: 14416
// Dependencies: [14416, 14418, 14425, 14448, 14436, 14450, 14446, 14451]

// Module 14415
import _mod14416 from "module_14416" /* 14416 */;
import _mod14418 from "module_14418" /* 14418 */;
import text from "text" /* 14425 */;
import _mod14448 from "module_14448" /* 14448 */;

if (!_mod14416) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14418(arg0);
    const tmp4 = text(arg1);
    if (!_mod14448) {
      if (tmp(14436)(tmp3, tmp4)) {
        const tmpResult = tmp(14450);
        return tmpResult(!tmp(14446)(tmp(14451).f, tmp3, tmp4), tmp3[tmp4]);
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
