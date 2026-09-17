// Module ID: 4761
// Function ID: 4762
// Name: reduce
// Dependencies: [514, 4762, 4763, 584, 516]

// Module 4761 (reduce)
import _mod514 from "module_514" /* 514 */;
import baseForOwn from "baseForOwn" /* 516 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function reduce(arg0, arg1, arg2) {
  if (_mod514(arg0)) {
    let tmpResult = tmp(4762);
  } else {
    tmpResult = tmp(4763);
  }
  return tmpResult(arg0, baseIteratee(arg1, 4), arg2, arguments.length < 3, baseForOwn);
};
