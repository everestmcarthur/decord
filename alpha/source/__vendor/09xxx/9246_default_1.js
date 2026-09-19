// Module ID: 9246
// Function ID: 9247
// Name: default_1
// Dependencies: [9247]
// Exports: default

// Module 9246 (default_1)
import _mod9247 from "module_9247" /* 9247 */;

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
const mergeDefs = fn(_mod9247);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
