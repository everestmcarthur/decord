// Module ID: 7849
// Function ID: 7850
// Name: baseIndexOf
// Dependencies: [7850, 4792, 7851]

// Module 7849 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4792 */;
import strictIndexOf from "strictIndexOf" /* 7850 */;
import baseIsNaN from "baseIsNaN" /* 7851 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
