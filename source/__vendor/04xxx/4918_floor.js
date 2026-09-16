// Module ID: 4918
// Function ID: 4919
// Name: floor
// Dependencies: [1307]

// Module 4918 (floor)
import _mod1307 from "module_1307" /* 1307 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1307(arg0);
  }
  return tmp;
};
