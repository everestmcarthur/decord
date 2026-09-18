// Module ID: 4972
// Function ID: 4973
// Name: iterateValue
// Dependencies: [4973, 4974]

// Module 4972 (iterateValue)
import _mod4973 from "module_4973" /* 4973 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod4973(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4974)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4974)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
