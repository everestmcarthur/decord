// Module ID: 4728
// Function ID: 4729
// Name: copySymbols
// Dependencies: [4721, 659]

// Module 4728 (copySymbols)
import stubArray from "stubArray" /* 659 */;
import copyObject from "copyObject" /* 4721 */;


export default function copySymbols(arg0, arg1) {
  return copyObject(arg0, stubArray(arg0), arg1);
};
