// Module ID: 14334
// Function ID: 14335
// Dependencies: [14326, 14325, 14333]

// Module 14334
import all from "all" /* 14326 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (all(toString)) {
      const tmp4 = tmp(14333)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14325);
    }
  }
  const valueOf = arg0.valueOf;
  if (all(valueOf)) {
    let tmp5Result = tmp5(14325);
    const tmp8 = tmp5(14333)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14326)(toString2)) {
      tmp5Result = tmp5(14325);
      const tmp10 = tmp5(14333)(toString2, arg0);
      if (!tmp5Result(tmp10)) {
        return tmp10;
      }
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
