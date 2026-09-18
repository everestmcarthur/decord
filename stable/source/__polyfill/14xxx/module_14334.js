// Module ID: 14334
// Function ID: 14335
// Dependencies: [14326, 14325, 14333]

// Module 14334
import _mod14326 from "module_14326" /* 14326 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14326(toString)) {
      const tmp4 = tmp(14333)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14325);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14326(valueOf)) {
    const tmp8 = tmp5(14333)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14325);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14326)(toString2)) {
      const tmp10 = tmp5(14333)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14325);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
