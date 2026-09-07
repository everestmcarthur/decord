// Module ID: 14356
// Function ID: 14357
// Dependencies: [14303, 14354, 14337]

// Module 14356
import getOwnPropertyDescriptor from "getOwnPropertyDescriptor" /* 14303 */;
import _mod14337 from "module_14337" /* 14337 */;
import defineProperty from "defineProperty" /* 14354 */;


export default getOwnPropertyDescriptor ? ((arg0, arg1, arg2) => defineProperty.f(arg0, arg1, _mod14337(1, arg2))) : ((arg0, arg1, arg2) => {
  arg0[arg1] = arg2;
  return arg0;
});
