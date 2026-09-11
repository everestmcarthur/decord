// Module ID: 4886
// Function ID: 4887
// Name: truncate
// Dependencies: [1283, 4887]

// Module 4886 (truncate)
import _mod1283 from "module_1283" /* 1283 */;
import floor from "floor" /* 4887 */;


export default function truncate(num) {
  if (typeof num !== "number") {
    if (typeof num !== "bigint") {
      const tmp10 = new _mod1283("argument must be a Number or a BigInt");
      throw tmp10;
    }
  }
  if (num < 0) {
    let tmp3 = -floor(-num);
  } else {
    tmp3 = floor(num);
  }
  num = 0;
  if (0 !== tmp3) {
    num = tmp3;
  }
  return num;
};
