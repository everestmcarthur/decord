// Module ID: 267
// Function ID: 268
// Dependencies: [123, 268, 270]
// Exports: default

// Module 267
import polyfillObjectProperty from "polyfillObjectProperty" /* 123 */;

const require = globalThis.__r;

require = arg1;
const dependencyMap = arg6;
let c2 = false;

export default function setUpMutationObserver() {
  if (!c2) {
    c2 = true;
    polyfillObjectProperty.polyfillGlobal("MutationObserver", () => require("MutationObserver").default);
    polyfillObjectProperty.polyfillGlobal("MutationRecord", () => require("MutationRecord").default);
  }
};
