// Module ID: 7719
// Function ID: 7720
// Name: arrayIncludes
// Dependencies: [7720]

// Module 7719 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7720 */;


export default function arrayIncludes(arg0, arg1) {
  let num = 0;
  if (null != arg0) {
    num = arg0.length;
  }
  let tmp = num;
  if (tmp) {
    tmp = baseIndexOf(arg0, arg1, 0) > -1;
  }
  return tmp;
};
