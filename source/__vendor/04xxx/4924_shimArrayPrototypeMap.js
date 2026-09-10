// Module ID: 4924
// Function ID: 4925
// Name: shimArrayPrototypeMap
// Dependencies: [4859, 4878]

// Module 4924 (shimArrayPrototypeMap)
import properlyBoxed from "properlyBoxed" /* 4859 */;
import defineProperty from "defineProperty" /* 4878 */;


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
