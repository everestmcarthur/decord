// Module ID: 4695
// Function ID: 4696
// Name: copySymbols
// Dependencies: [4688, 659]

// Module 4695 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4688 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
