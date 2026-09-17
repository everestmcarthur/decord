// Module ID: 8532
// Function ID: 8533
// Name: reverse
// Dependencies: []

// Module 8532 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
  }
};
