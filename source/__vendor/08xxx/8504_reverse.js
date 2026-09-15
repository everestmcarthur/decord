// Module ID: 8504
// Function ID: 8505
// Name: reverse
// Dependencies: []

// Module 8504 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
  }
};
