// Module ID: 4889
// Function ID: 4890
// Name: iterateValue
// Dependencies: [4890, 4891]

// Module 4889 (iterateValue)
import _mod4890 from "module_4890" /* 4890 */;


export default function iterateValue(arg0) {
  const tmp3 = _mod4890(arg0);
  if (tmp3) {
    if (arguments.length > 1) {
      let tmp9 = tmp(4891)(tmp3, arguments[1]);
    } else {
      tmp9 = tmp(4891)(tmp3);
    }
    return tmp9;
  } else {
    const tmp7 = new TypeError("non-iterable value provided");
    throw tmp7;
  }
};
