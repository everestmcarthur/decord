// Module ID: 14393
// Function ID: 14394
// Dependencies: [14359, 14380, 14394, 14404, 14405]

// Module 14393
import _mod14359 from "module_14359" /* 14359 */;
import _mod14380 from "module_14380" /* 14380 */;
import f2 from "f" /* 14394 */;
import _mod14404 from "module_14404" /* 14404 */;
import _mod14405 from "module_14405" /* 14405 */;

let closure_2 = _mod14359([].concat);

export default _mod14380("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(_mod14404(arg0));
  const f = _mod14405.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = closure_2(fResult, f(arg0));
  }
  return tmp2;
});
