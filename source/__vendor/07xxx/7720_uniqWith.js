// Module ID: 7720
// Function ID: 7721
// Name: uniqWith
// Dependencies: [7721]

// Module 7720 (uniqWith)
import baseUniq from "baseUniq" /* 7721 */;


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
