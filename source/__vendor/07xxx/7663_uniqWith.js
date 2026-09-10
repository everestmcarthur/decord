// Module ID: 7663
// Function ID: 7664
// Name: uniqWith
// Dependencies: [7664]

// Module 7663 (uniqWith)
import baseUniq from "baseUniq" /* 7664 */;


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
