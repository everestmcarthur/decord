// Module ID: 4926
// Function ID: 4927
// Name: shimArrayPrototypeMap
// Dependencies: [4861, 4880]

// Module 4926 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4861 */;
import defineProperty from "defineProperty" /* 4880 */;


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
