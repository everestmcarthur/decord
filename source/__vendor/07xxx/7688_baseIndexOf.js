// Module ID: 7688
// Function ID: 7689
// Name: baseIndexOf
// Dependencies: [7689, 4643, 7690]

// Module 7688 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4643 */;
import strictIndexOf from "strictIndexOf" /* 7689 */;
import baseIsNaN from "baseIsNaN" /* 7690 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
