// Module ID: 4759
// Function ID: 4760
// Name: reduce
// Dependencies: [514, 4760, 4761, 584, 516]

// Module 4759 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = tmp(4760);
  } else {
    tmpResult = tmp(4761);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
