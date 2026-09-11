// Module ID: 5254
// Function ID: 5255
// Dependencies: [5255, 5256, 5257, 5258]

// Module 5254
import _mod5255 from "module_5255" /* 5255 */;
import _mod5256 from "module_5256" /* 5256 */;
import _mod5257 from "module_5257" /* 5257 */;
import _mod5258 from "module_5258" /* 5258 */;

const self = this;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let fn = self;
  if (self) {
    fn = self.__exportStar;
  }
  if (!fn) {
    fn = (obj, exports) => {
      for (const key10007 in arg0) {
        let tmp6 = "default" === key10007;
        if (tmp6) {
          if (tmp6) {
            continue;
          } else {
            let tmp4 = self2(arg1, arg0, key10007);
            continue;
          }
          continue;
        } else {
          let _Object = Object;
          hasOwnProperty = Object.prototype.hasOwnProperty;
          let call = hasOwnProperty.call;
          if (typeof call === "unknown") {
            let hasOwnPropertyResult = hasOwnProperty(key10007);
          } else {
            hasOwnPropertyResult = call(arg1, key10007);
          }
        }
      }
    };
  }
  const _Object2 = Object;
  fn(_mod5255, exports);
  fn(_mod5256, exports);
  fn(_mod5257, exports);
  fn(_mod5258, exports);
} else {
  let _Object = Object;
}
