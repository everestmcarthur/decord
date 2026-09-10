// Module ID: 4819
// Function ID: 4820
// Dependencies: [4818, 4820]

// Module 4819
import requirePromise from "requirePromise" /* 4818 */;
import _mod4820 from "module_4820" /* 4820 */;


export default function getPolyfill() {
  requirePromise();
  if (typeof Promise.allSettled === "function") {
  } else {
    allSettled = _mod4820;
  }
  return allSettled;
};
