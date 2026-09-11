// Module ID: 7687
// Function ID: 7688
// Name: baseIndexOf
// Dependencies: [7688, 4642, 7689]

// Module 7687 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4642 */;
import strictIndexOf from "strictIndexOf" /* 7688 */;
import baseIsNaN from "baseIsNaN" /* 7689 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
