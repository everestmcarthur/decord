// Module ID: 7728
// Function ID: 7729
// Name: arrayIncludes
// Dependencies: [7729]

// Module 7728 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7729 */;


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
