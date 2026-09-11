// Module ID: 7684
// Function ID: 7685
// Name: uniqWith
// Dependencies: [7685]

// Module 7684 (uniqWith)
import baseUniq from "baseUniq" /* 7685 */;


export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, undefined, tmp);
    }
    return [];
  }
};
