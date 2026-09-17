// Module ID: 4926
// Function ID: 4927
// Dependencies: [1313, 4918, 1306, 1307]

// Module 4926
import _mod1313 from "module_1313" /* 1313 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1313(num)) {
      if (tmp2(4918)(num)) {
        const tmp = tmp2(1306)(num);
        return tmp2(1307)(tmp) === tmp;
      }
    }
  }
  return false;
};
