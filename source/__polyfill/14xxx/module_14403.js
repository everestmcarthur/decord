// Module ID: 14403
// Function ID: 14404
// Dependencies: [14401]

// Module 14403
import _mod14401 from "module_14401" /* 14401 */;


export default (arg0, arg1) => {
  const tmp = _mod14401(arg0);
  if (tmp < 0) {
    let tmp3 = max(tmp + arg1, 0);
  } else {
    tmp3 = min(tmp, arg1);
  }
  return tmp3;
};
