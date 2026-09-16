// Module ID: 4726
// Function ID: 4727
// Name: copySymbols
// Dependencies: [4719, 659]

// Module 4726 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4719 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
