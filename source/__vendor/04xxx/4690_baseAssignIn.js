// Module ID: 4690
// Function ID: 4691
// Name: baseAssignIn
// Dependencies: [4687, 4691]

// Module 4690 (baseAssignIn)
import copyObject from "copyObject" /* 4687 */;
import keysIn from "keysIn" /* 4691 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
