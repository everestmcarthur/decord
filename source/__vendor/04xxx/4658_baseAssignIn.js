// Module ID: 4658
// Function ID: 4659
// Name: baseAssignIn
// Dependencies: [4655, 4659]

// Module 4658 (baseAssignIn)
import copyObject from "copyObject" /* 4655 */;
import keysIn from "keysIn" /* 4659 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
