// Module ID: 4842
// Function ID: 4843
// Name: uniqueId
// Dependencies: [626]

// Module 4842 (uniqueId)
import _mod626 from "module_626" /* 626 */;

let c2 = 0;

export default function uniqueId(arg0) {
  const sum = c2 + 1;
  c2 = sum;
  return _mod626(arg0) + sum;
};
