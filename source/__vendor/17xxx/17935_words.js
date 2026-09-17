// Module ID: 17935
// Function ID: 17936
// Name: words
// Dependencies: [626, 17936, 17937, 17938]

// Module 17935 (words)
import _mod626 from "module_626" /* 626 */;


export default function words(arg0, arg1, arg2) {
  let tmpResult = dependencyMap;
  const str = _mod626(arg0);
  let tmp3;
  if (!arg2) {
    tmp3 = arg1;
  }
  if (undefined === tmp3) {
    if (tmp(17936)(str)) {
      tmpResult = tmp(17937);
      let tmpResultResult = tmpResult(str);
    } else {
      tmpResultResult = tmp(17938)(str);
    }
  } else {
    return str.match(tmp3) || [];
  }
};
