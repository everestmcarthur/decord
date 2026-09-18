// Module ID: 4814
// Function ID: 4815
// Name: properlyBoxed
// Dependencies: [4815, 4816]

// Module 4814 (properlyBoxed)
import _mod4815 from "module_4815" /* 4815 */;
import _mod4816 from "module_4816" /* 4816 */;


export default function getPolyfill() {
  if (!_mod4815(map)) {
    map = _mod4816;
  }
  return map;
};
