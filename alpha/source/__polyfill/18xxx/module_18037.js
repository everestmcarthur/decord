// Module ID: 18037
// Function ID: 18038
// Dependencies: [626, 18038, 18039, 18042]

// Module 18037
import _mod626 from "module_626" /* 626 */;
import _mod18038 from "module_18038" /* 18038 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod18038(str)) {
      tmp3 = tmp(18039)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(18042)(tmp3, 1).join("");
      const obj = tmp(18042)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
