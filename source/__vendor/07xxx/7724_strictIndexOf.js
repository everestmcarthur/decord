// Module ID: 7724
// Function ID: 7725
// Name: strictIndexOf
// Dependencies: []

// Module 7724 (strictIndexOf)

export default function strictIndexOf(arg0, arg1, arg2) {
  let sum = arg2 - 1 + 1;
  if (sum < arg0.length) {
    while (arg0[sum] !== arg1) {
      sum = sum + 1;
    }
    return sum;
  }
  return -1;
};
