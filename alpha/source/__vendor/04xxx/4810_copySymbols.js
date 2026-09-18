// Module ID: 4810
// Function ID: 4811
// Name: copySymbols
// Dependencies: [4803, 659]

// Module 4810 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4803 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
