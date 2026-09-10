// Module ID: 4662
// Function ID: 4663
// Name: copySymbols
// Dependencies: [4655, 659]

// Module 4662 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4655 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
