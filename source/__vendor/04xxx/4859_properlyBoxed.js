// Module ID: 4859
// Function ID: 4860
// Name: properlyBoxed
// Dependencies: [4860, 4861]

// Module 4859 (properlyBoxed)
import _mod4860 from "module_4860" /* 4860 */;
import _mod4861 from "module_4861" /* 4861 */;


export default function getPolyfill() {
  if (!_mod4860(map)) {
    map = _mod4861;
  }
  return map;
};
