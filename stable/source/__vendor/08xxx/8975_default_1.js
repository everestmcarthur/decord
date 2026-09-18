// Module ID: 8975
// Function ID: 8976
// Name: default_1
// Dependencies: [8976]
// Exports: default

// Module 8975 (default_1)
import _mod8976 from "module_8976" /* 8976 */;

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
const mergeDefs = fn(_mod8976);

export default function default_1() {
  return mergeDefs.default();
};
export default exports.default;
