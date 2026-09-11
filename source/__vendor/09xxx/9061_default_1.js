// Module ID: 9061
// Function ID: 9062
// Name: default_1
// Dependencies: [9062]
// Exports: default

// Module 9061 (default_1)
import _mod9062 from "module_9062" /* 9062 */;

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
const mergeDefs = fn(_mod9062);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
