// Module ID: 8562
// Function ID: 8563
// Dependencies: [514, 8563, 8564, 584]

// Module 8562
import _mod514 from "module_514" /* 514 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (_mod514(arg0)) {
      let tmpResult = tmp(8563);
    } else {
      tmpResult = tmp(8564);
    }
    return tmpResult(arg0, closure_0, baseIteratee(arg1, 2), closure_1 ? closure_1() : {});
  };
};
