// Module ID: 4879
// Function ID: 4880
// Name: shimArrayPrototypeMap
// Dependencies: [4814, 4833]

// Module 4879 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4814 */;
import defineProperty from "defineProperty" /* 4833 */;


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
