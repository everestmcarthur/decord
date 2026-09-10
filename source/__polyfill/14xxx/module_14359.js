// Module ID: 14359
// Function ID: 14360
// Dependencies: [14351, 14350, 14358]

// Module 14359
import _mod14351 from "module_14351" /* 14351 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14351(toString)) {
      const tmp4 = tmp(14358)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14350);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14351(valueOf)) {
    const tmp8 = tmp5(14358)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14350);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14351)(toString2)) {
      const tmp10 = tmp5(14358)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14350);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
