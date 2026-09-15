// Module ID: 4727
// Function ID: 4728
// Name: copySymbols
// Dependencies: [4720, 659]

// Module 4727 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4720 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
