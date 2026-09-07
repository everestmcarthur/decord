// Module ID: 14059
// Function ID: 14060
// Name: Range
// Dependencies: [14048]

// Module 14059 (Range)
import Range from "Range" /* 14048 */;


export default (arg0, arg1, arg2) => {
  const obj = new Range(arg0, arg2);
  return obj.intersects(new Range(arg1, arg2), arg2);
};
