// Module ID: 17944
// Function ID: 17945
// Dependencies: [626, 17945, 17946, 17949]

// Module 17944
import _mod626 from "module_626" /* 626 */;
import _mod17945 from "module_17945" /* 17945 */;


export default function createCaseFirst(arg0) {
  closure_0 = arg0;
  return (arg0) => {
    const str = _mod626(arg0);
    let tmp3;
    if (_mod17945(str)) {
      tmp3 = tmp(17946)(str);
    }
    if (tmp3) {
      let first = tmp3[0];
    } else {
      first = str.charAt(0);
    }
    if (tmp3) {
      let joined = tmp(17949)(tmp3, 1).join("");
      const obj = tmp(17949)(tmp3, 1);
    } else {
      joined = str.slice(1);
    }
    return first[closure_0]() + joined;
  };
};
