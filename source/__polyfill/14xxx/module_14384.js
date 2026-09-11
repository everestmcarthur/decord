// Module ID: 14384
// Function ID: 14385
// Dependencies: [14376, 14375, 14383]

// Module 14384
import _mod14376 from "module_14376" /* 14376 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14376(toString)) {
      const tmp4 = tmp(14383)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14375);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14376(valueOf)) {
    const tmp8 = tmp5(14383)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14375);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14376)(toString2)) {
      const tmp10 = tmp5(14383)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14375);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
