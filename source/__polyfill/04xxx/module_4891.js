// Module ID: 4891
// Function ID: 4892
// Dependencies: [1314, 4883, 1307, 1308]

// Module 4891
import _mod1314 from "module_1314" /* 1314 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1314(num)) {
      if (tmp2(4883)(num)) {
        const tmp = tmp2(1307)(num);
        return tmp2(1308)(tmp) === tmp;
      }
    }
  }
  return false;
};
