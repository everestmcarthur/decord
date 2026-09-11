// Module ID: 4861
// Function ID: 4862
// Name: properlyBoxed
// Dependencies: [4862, 4863]

// Module 4861 (properlyBoxed)
import _mod4862 from "module_4862" /* 4862 */;
import _mod4863 from "module_4863" /* 4863 */;


export default function getPolyfill() {
  if (!_mod4862(map)) {
    map = _mod4863;
  }
  return map;
};
