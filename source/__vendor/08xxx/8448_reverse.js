// Module ID: 8448
// Function ID: 8449
// Name: reverse
// Dependencies: []

// Module 8448 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
  }
};
