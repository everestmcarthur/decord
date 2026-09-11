// Module ID: 7685
// Function ID: 7686
// Name: uniqWith
// Dependencies: [7686]

// Module 7685 (uniqWith)
import baseUniq from "baseUniq" /* 7686 */;


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
