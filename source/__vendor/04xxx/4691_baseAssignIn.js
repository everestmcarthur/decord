// Module ID: 4691
// Function ID: 4692
// Name: baseAssignIn
// Dependencies: [4688, 4692]

// Module 4691 (baseAssignIn)
import copyObject from "copyObject" /* 4688 */;
import keysIn from "keysIn" /* 4692 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
