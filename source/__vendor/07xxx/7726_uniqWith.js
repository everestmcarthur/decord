// Module ID: 7726
// Function ID: 7727
// Name: uniqWith
// Dependencies: [7727]

// Module 7726 (uniqWith)
import baseUniq from "baseUniq" /* 7727 */;


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
