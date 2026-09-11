// Module ID: 4886
// Function ID: 4887
// Name: floor
// Dependencies: [1308]

// Module 4886 (floor)
import _mod1308 from "module_1308" /* 1308 */;


export default function floor(arg0) {
  let tmp = arg0;
  if (typeof arg0 !== "bigint") {
    tmp = _mod1308(arg0);
  }
  return tmp;
};
