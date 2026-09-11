// Module ID: 4852
// Function ID: 4853
// Dependencies: [4851, 4853]

// Module 4852
import requirePromise from "requirePromise" /* 4851 */;
import _mod4853 from "module_4853" /* 4853 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4853;
  }
  return allSettled;
};
