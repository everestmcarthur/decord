// Module ID: 4860
// Function ID: 4861
// Name: properlyBoxed
// Dependencies: [4861, 4862]

// Module 4860 (properlyBoxed)
import _mod4861 from "module_4861" /* 4861 */;
import _mod4862 from "module_4862" /* 4862 */;


export default function getPolyfill() {
  if (!_mod4861(map)) {
    map = _mod4862;
  }
  return map;
};
