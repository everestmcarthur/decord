// Module ID: 14455
// Function ID: 14456
// Dependencies: [14447, 14446, 14454]

// Module 14455
import _mod14447 from "module_14447" /* 14447 */;


export default (arg0, arg1) => {
  if ("string" === arg1) {
    const toString = arg0.toString;
    if (_mod14447(toString)) {
      const tmp4 = tmp(14454)(toString, arg0);
      if (!tmpResult(tmp4)) {
        return tmp4;
      }
      tmpResult = tmp(14446);
    }
  }
  const valueOf = arg0.valueOf;
  if (_mod14447(valueOf)) {
    const tmp8 = tmp5(14454)(valueOf, arg0);
    if (!tmp5Result(tmp8)) {
      return tmp8;
    }
    tmp5Result = tmp5(14446);
  }
  if ("string" !== arg1) {
    const toString2 = arg0.toString;
    if (tmp5(14447)(toString2)) {
      const tmp10 = tmp5(14454)(toString2, arg0);
      if (!tmp5Result2(tmp10)) {
        return tmp10;
      }
      tmp5Result2 = tmp5(14446);
    }
  }
  throw new TypeError("Can't convert object to primitive value");
};
