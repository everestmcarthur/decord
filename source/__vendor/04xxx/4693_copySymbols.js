// Module ID: 4693
// Function ID: 4694
// Name: copySymbols
// Dependencies: [4686, 659]

// Module 4693 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4686 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
