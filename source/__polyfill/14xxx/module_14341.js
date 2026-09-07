// Module ID: 14341
// Function ID: 14342
// Dependencies: [14307, 14328, 14342, 14352, 14353]

// Module 14341
import call from "call" /* 14307 */;
import all from "all" /* 14328 */;
import f2 from "f" /* 14342 */;
import all2 from "all" /* 14352 */;
import _mod14353 from "module_14353" /* 14353 */;

let closure_2 = call([].concat);

export default all("Reflect", "ownKeys") || (function ownKeys(arg0) {
  const fResult = f2.f(all2(arg0));
  const f = _mod14353.f;
  let tmp2 = fResult;
  if (f) {
    tmp2 = callback(fResult, f(arg0));
  }
  return tmp2;
});
