// Module ID: 14386
// Function ID: 14387
// Dependencies: [14378, 14377, 14385]

// Module 14386
import _mod14378 from "module_14378" /* 14378 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14378(toString)) {
      const tmp4 = tmp(14385)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14377);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14378(valueOf)) {
    const tmp8 = tmp5(14385)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14377);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14378)(toString2)) {
      const tmp10 = tmp5(14385)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14377);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
