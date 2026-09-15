// Module ID: 4760
// Function ID: 4761
// Name: reduce
// Dependencies: [514, 4761, 4762, 584, 516]

// Module 4760 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = tmp(4761);
  } else {
    tmpResult = tmp(4762);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
