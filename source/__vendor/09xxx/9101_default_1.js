// Module ID: 9101
// Function ID: 9102
// Name: default_1
// Dependencies: [9102]
// Exports: default

// Module 9101 (default_1)
import _mod9102 from "module_9102" /* 9102 */;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
const mergeDefs = fn(_mod9102);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
