// Module ID: 7629
// Function ID: 7630
// Name: baseIndexOf
// Dependencies: [7630, 4610, 7631]

// Module 7629 (baseIndexOf)
import baseFindIndex from "baseFindIndex" /* 4610 */;
import strictIndexOf from "strictIndexOf" /* 7630 */;
import baseIsNaN from "baseIsNaN" /* 7631 */;


export default function baseIndexOf(arg0, arg1, arg2) {
  if (arg1 == arg1) {
    let tmp3Result = strictIndexOf(arg0, arg1, arg2);
  } else {
    tmp3Result = baseFindIndex(arg0, baseIsNaN, arg2);
  }
  return tmp3Result;
};
