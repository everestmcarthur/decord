// Module ID: 14050
// Function ID: 14051
// Name: Range
// Dependencies: [14048]

// Module 14050 (Range)
import Range from "Range" /* 14048 */;


export default (arg0, arg1, arg2) => {
  try {
    const tmp7 = new Range(arg1, arg2);
    return tmp7.test(arg0);
  } catch (err) {
    return false;
  }
};
