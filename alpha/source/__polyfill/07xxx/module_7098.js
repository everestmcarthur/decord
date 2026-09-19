// Module ID: 7098
// Function ID: 7099
// Dependencies: []

// Module 7098

export default function _arrayLikeToArray(arg0, arg1) {
  let length = arg1;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
};
