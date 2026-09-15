// Module ID: 14429
// Function ID: 14430
// Dependencies: [14421, 14420, 14428]

// Module 14429
import _mod14421 from "module_14421" /* 14421 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14421(toString)) {
      const tmp4 = tmp(14428)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14420);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14421(valueOf)) {
    const tmp8 = tmp5(14428)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14420);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14421)(toString2)) {
      const tmp10 = tmp5(14428)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14420);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
