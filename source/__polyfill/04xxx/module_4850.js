// Module ID: 4850
// Function ID: 4851
// Dependencies: [4849, 4851]

// Module 4850
import requirePromise from "requirePromise" /* 4849 */;
import _mod4851 from "module_4851" /* 4851 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4851;
  }
  return allSettled;
};
