// Module ID: 4865
// Function ID: 4866
// Name: RequireObjectCoercible
// Dependencies: [1283]

// Module 4865 (RequireObjectCoercible)
import _mod1283 from "module_1283" /* 1283 */;


export default function RequireObjectCoercible(arg0) {
  if (null == arg0) {
    let text = arguments.length > 0;
    if (text) {
      text = arguments[1];
    }
    if (!text) {
      text = `Cannot call method on ${arg0}`;
    }
    const tmp32 = new _mod1283(text);
    throw tmp32;
  } else {
    return arg0;
  }
};
