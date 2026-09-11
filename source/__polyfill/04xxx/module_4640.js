// Module ID: 4640
// Function ID: 4641
// Dependencies: [4641, 4643, 584]

// Module 4640
import baseIteratee from "baseIteratee" /* 584 */;
import _mod4641 from "module_4641" /* 4641 */;
import baseFindIndex from "baseFindIndex" /* 4643 */;


export default function findLastIndex(arg0, arg1, arg2) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  if (num) {
    const diff = num - 1;
    if (undefined === arg2) {
      return baseFindIndex(arg0, baseIteratee(arg1, 3), diff, true);
    } else {
      let sum = _mod4641(arg2);
      if (arg2 < 0) {
        sum = num + sum;
        let tmp7 = max(sum, 0);
      } else {
        tmp7 = min(sum, num - 1);
      }
    }
  } else {
    return -1;
  }
};
