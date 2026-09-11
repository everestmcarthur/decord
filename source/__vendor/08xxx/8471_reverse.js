// Module ID: 8471
// Function ID: 8472
// Name: reverse
// Dependencies: []

// Module 8471 (reverse)

export default function reverse(arg0) {
  if (null == arg0) {
    return arg0;
  } else {
    const call = reverse.call;
    typeof call === "unknown" ? reverse() : call(arg0);
  }
};
