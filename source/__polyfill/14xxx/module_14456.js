// Module ID: 14456
// Function ID: 14457
// Dependencies: [14424, 14425, 14457]

// Module 14456
import _mod14425 from "module_14425" /* 14425 */;
import element from "element" /* 14457 */;
import getOwnPropertyDescriptor from "module_14424" /* 14424 */;

let tmp2 = !getOwnPropertyDescriptor;
if (!getOwnPropertyDescriptor) {
  tmp2 = !_mod14425(() => 7 !== Object.defineProperty(element("div"), "a", {
    get() {
      return 7;
    }
  }).a);
}

export default tmp2;
