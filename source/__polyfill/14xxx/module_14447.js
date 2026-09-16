// Module ID: 14447
// Function ID: 14448
// Dependencies: [14439, 14438, 14446]

// Module 14447
import _mod14439 from "module_14439" /* 14439 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14439(toString)) {
      const tmp4 = tmp(14446)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14438);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14439(valueOf)) {
    const tmp8 = tmp5(14446)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14438);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14439)(toString2)) {
      const tmp10 = tmp5(14446)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14438);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
