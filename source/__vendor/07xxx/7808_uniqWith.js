// Module ID: 7808
// Function ID: 7809
// Name: uniqWith
// Dependencies: [7809]

// Module 7808 (uniqWith)
import baseUniq from "baseUniq" /* 7809 */;


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
