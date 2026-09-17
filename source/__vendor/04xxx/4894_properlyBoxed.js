// Module ID: 4894
// Function ID: 4895
// Name: properlyBoxed
// Dependencies: [4895, 4896]

// Module 4894 (properlyBoxed)
import _mod4895 from "module_4895" /* 4895 */;
import _mod4896 from "module_4896" /* 4896 */;


export default function getPolyfill() {
  if (!_mod4895(map)) {
    map = _mod4896;
  }
  return map;
};
