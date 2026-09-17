// Module ID: 4724
// Function ID: 4725
// Name: baseAssignIn
// Dependencies: [4721, 4725]

// Module 4724 (baseAssignIn)
import copyObject from "copyObject" /* 4721 */;
import keysIn from "keysIn" /* 4725 */;


export default function baseAssignIn(arg0, arg1) {
  let tmp = arg0;
  if (arg0) {
    tmp = copyObject(arg1, keysIn(arg1), arg0);
  }
  return tmp;
};
