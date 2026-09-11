// Module ID: 7687
// Function ID: 7688
// Name: arrayIncludes
// Dependencies: [7688]

// Module 7687 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7688 */;


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
