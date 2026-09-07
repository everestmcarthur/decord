// Module ID: 8992
// Function ID: 8993
// Name: default_1
// Dependencies: [8993]
// Exports: default

// Module 8992 (default_1)
import mergeDefs from "mergeDefs" /* 8993 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: null };
      obj[0] = __esModule;
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
let closure_0 = fn(mergeDefs);

export default function default_1() {
  return closure_0.default();
};
export default exports.default;
