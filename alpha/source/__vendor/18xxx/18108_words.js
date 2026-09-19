// Module ID: 18108
// Function ID: 18109
// Name: words
// Dependencies: [626, 18109, 18110, 18111]

// Module 18108 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(18109)(str)) {
      tmpResult = tmp(18110);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(18111)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
