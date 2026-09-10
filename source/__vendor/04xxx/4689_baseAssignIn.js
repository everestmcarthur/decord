// Module ID: 4689
// Function ID: 4690
// Name: baseAssignIn
// Dependencies: [4686, 4690]

// Module 4689 (baseAssignIn)
import copyObject from "copyObject" /* 4686 */;
import keysIn from "keysIn" /* 4690 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
