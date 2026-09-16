// Module ID: 4892
// Function ID: 4893
// Name: properlyBoxed
// Dependencies: [4893, 4894]

// Module 4892 (properlyBoxed)
import _mod4893 from "module_4893" /* 4893 */;
import _mod4894 from "module_4894" /* 4894 */;


export default function getPolyfill() {
  if (!_mod4893(map)) {
    map = _mod4894;
  }
  return map;
};
