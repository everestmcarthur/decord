// Module ID: 4860
// Function ID: 4861
// Dependencies: [1314, 4852, 1307, 1308]

// Module 4860
import _mod1314 from "module_1314" /* 1314 */;


export default function isInteger(num) {
  if (typeof num === "number") {
    if (!_mod1314(num)) {
      if (tmp2(4852)(num)) {
        const tmp = tmp2(1307)(num);
        return tmp2(1308)(tmp) === tmp;
      }
    }
  }
  return false;
};
