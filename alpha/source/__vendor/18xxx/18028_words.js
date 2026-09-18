// Module ID: 18028
// Function ID: 18029
// Name: words
// Dependencies: [626, 18029, 18030, 18031]

// Module 18028 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(18029)(str)) {
      tmpResult = tmp(18030);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(18031)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
