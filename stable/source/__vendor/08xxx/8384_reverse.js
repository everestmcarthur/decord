// Module ID: 8384
// Function ID: 8385
// Name: reverse
// Dependencies: []

// Module 8384 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
  }
};
