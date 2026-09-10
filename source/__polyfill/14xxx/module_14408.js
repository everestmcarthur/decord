// Module ID: 14408
// Function ID: 14409
// Dependencies: [14400, 14399, 14407]

// Module 14408
import _mod14400 from "module_14400" /* 14400 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14400(toString)) {
      const tmp4 = tmp(14407)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14399);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14400(valueOf)) {
    const tmp8 = tmp5(14407)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14399);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14400)(toString2)) {
      const tmp10 = tmp5(14407)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14399);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
