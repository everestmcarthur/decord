// Module ID: 14051
// Function ID: 14052
// Name: Range
// Dependencies: [14048]

// Module 14051 (Range)
import Range from "Range" /* 14048 */;


export default (arg0, arg1) => {
  const tmp = new Range(arg0, arg1);
  return new Range(arg0, arg1).set.map((arr) => {
    const mapped = arr.map((value) => value.value);
    const str = mapped.join(" ");
    return mapped.join(" ").trim().split(" ");
  });
};
