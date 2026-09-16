// Module ID: 4924
// Function ID: 4925
// Dependencies: [1313, 4916, 1306, 1307]

// Module 4924
import _mod1313 from "module_1313" /* 1313 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1313(num)) {
      if (tmp2(4916)(num)) {
        const tmp = tmp2(1306)(num);
        return tmp2(1307)(tmp) === tmp;
      }
    }
  }
  return false;
};
