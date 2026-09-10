// Module ID: 4828
// Function ID: 4829
// Name: properlyBoxed
// Dependencies: [4829, 4830]

// Module 4828 (properlyBoxed)
import _mod4829 from "module_4829" /* 4829 */;
import _mod4830 from "module_4830" /* 4830 */;


export default function getPolyfill() {
  if (!_mod4829(map)) {
    map = _mod4830;
  }
  return map;
};
