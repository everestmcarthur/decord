// Module ID: 8653
// Function ID: 8654
// Name: reverse
// Dependencies: []

// Module 8653 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
  }
};
