// Module ID: 1444
// Function ID: 1445
// Dependencies: [1287]

// Module 1444
import _mod1287 from "module_1287" /* 1287 */;


export default function hasToStringTagShams() {
  let toStringTag = _mod1287();
  if (toStringTag) {
    const _Symbol = Symbol;
    toStringTag = Symbol.toStringTag;
  }
  return toStringTag;
};
