// Module ID: 14422
// Function ID: 14423
// Dependencies: [14413, 14423, 14421, 14424]

// Module 14422
import _mod14413 from "module_14413" /* 14413 */;
import _mod14421 from "module_14421" /* 14421 */;
import _mod14423 from "module_14423" /* 14423 */;
import _mod14424 from "module_14424" /* 14424 */;


export default _mod14413 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14423("Symbol");
  let tmpResultResult = _mod14421(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14424(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14424;
  }
  return tmpResultResult;
});
