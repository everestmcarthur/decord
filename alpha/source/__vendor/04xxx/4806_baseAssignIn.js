// Module ID: 4806
// Function ID: 4807
// Name: baseAssignIn
// Dependencies: [4803, 4807]

// Module 4806 (baseAssignIn)
import copyObject from "copyObject" /* 4803 */;
import keysIn from "keysIn" /* 4807 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
