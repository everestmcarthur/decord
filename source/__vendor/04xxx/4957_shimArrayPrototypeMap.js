// Module ID: 4957
// Function ID: 4958
// Name: shimArrayPrototypeMap
// Dependencies: [4892, 4911]

// Module 4957 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4892 */;
import defineProperty from "defineProperty" /* 4911 */;


export default function shimArrayPrototypeMap() {
  const tmp = properlyBoxed();
  closure_0 = tmp;
  defineProperty(Array.prototype, { map: tmp }, {
    map() {
      return Array.prototype.map !== closure_0;
    }
  });
  return tmp;
};
