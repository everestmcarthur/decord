// Module ID: 8518
// Function ID: 8519
// Dependencies: [514, 8519, 8520, 584]

// Module 8518
import _mod514 from "module_514" /* 514 */;
import baseIteratee from "baseIteratee" /* 584 */;


export default function createAggregator(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (arg0, arg1) => {
    if (_mod514(arg0)) {
      let tmpResult = tmp(8519);
    } else {
      tmpResult = tmp(8520);
    }
    return tmpResult(arg0, closure_0, baseIteratee(arg1, 2), closure_1 ? closure_1() : {});
  };
};
