// Module ID: 14363
// Function ID: 14364
// Name: __core-js_shared__
// Dependencies: [14315, 14322]

// Module 14363 (__core-js_shared__)
import __core_js_shared__ from "__core-js_shared__" /* 14315 */;
import sum from "sum" /* 14322 */;

let closure_2 = __core_js_shared__("keys");

export default (arg0) => {
  let tmp2 = table[arg0];
  if (!tmp2) {
    const tmp5 = sum(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
