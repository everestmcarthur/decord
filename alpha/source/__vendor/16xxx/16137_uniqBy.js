// Module ID: 16137
// Function ID: 16138
// Name: uniqBy
// Dependencies: [7847, 584]

// Module 16137 (uniqBy)
import baseIteratee from "baseIteratee" /* 584 */;
import baseUniq from "baseUniq" /* 7847 */;


export default function uniqBy(arg0, arg1) {
  if (arg0) {
    if (arg0.length) {
      baseUniq(arg0, baseIteratee(arg1, 2));
    }
    return [];
  }
};
