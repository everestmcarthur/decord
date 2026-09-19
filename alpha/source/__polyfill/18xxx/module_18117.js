// Module ID: 18117
// Function ID: 18118
// Dependencies: [626, 18118, 18119, 18122]

// Module 18117
import _mod626 from "module_626" /* 626 */;
import _mod18118 from "module_18118" /* 18118 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod18118(str)) {
      tmp3 = tmp(18119)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18122)(tmp3, 1).join("");
      const obj = tmp(18122)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
