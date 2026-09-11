// Module ID: 7686
// Function ID: 7687
// Name: arrayIncludes
// Dependencies: [7687]

// Module 7686 (arrayIncludes)
import baseIndexOf from "baseIndexOf" /* 7687 */;


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
