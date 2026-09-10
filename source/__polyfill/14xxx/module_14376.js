// Module ID: 14376
// Function ID: 14377
// Dependencies: [14377, 14379, 14386, 14409, 14397, 14411, 14407, 14412]

// Module 14376
import _mod14377 from "module_14377" /* 14377 */;
import _mod14379 from "module_14379" /* 14379 */;
import text from "text" /* 14386 */;
import _mod14409 from "module_14409" /* 14409 */;

if (!_mod14377) {
  getOwnPropertyDescriptor = function getOwnPropertyDescriptor(arg0, arg1) {
    const tmp3 = _mod14379(arg0);
    const tmp4 = text(arg1);
    if (!_mod14409) {
      if (tmp(14397)(tmp3, tmp4)) {
        const tmpResult = tmp(14411);
        return tmpResult(!tmp(14407)(tmp(14412).f, tmp3, tmp4), tmp3[tmp4]);
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
