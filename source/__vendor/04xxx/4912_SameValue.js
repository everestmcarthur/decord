// Module ID: 4912
// Function ID: 4913
// Name: SameValue
// Dependencies: [1314]

// Module 4912 (SameValue)
import _mod1314 from "module_1314" /* 1314 */;


export default function SameValue(arg0, arg1) {
  if (arg0 === arg1) {
    let tmp4 = 0 !== arg0;
    if (!tmp4) {
      tmp4 = 1 / arg0 === 1 / arg1;
    }
    let tmp3 = tmp4;
  } else {
    tmp3 = _mod1314(arg0) && _mod1314(arg1);
  }
  return tmp3;
};
