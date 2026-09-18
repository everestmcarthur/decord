// Module ID: 14534
// Function ID: 14535
// Dependencies: [14535]

// Module 14534
import prop_mod from "module_14535" /* 14535 */;

let prop = prop_mod;
if (prop) {
  const _Symbol = Symbol;
  prop = !Symbol.sham;
}
if (prop) {
  const _Symbol2 = Symbol;
  prop = typeof Symbol.iterator === "symbol";
}

export default prop;
