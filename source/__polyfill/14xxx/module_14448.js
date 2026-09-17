// Module ID: 14448
// Function ID: 14449
// Dependencies: [14439, 14449, 14447, 14450]

// Module 14448
import _mod14439 from "module_14439" /* 14439 */;
import _mod14447 from "module_14447" /* 14447 */;
import _mod14449 from "module_14449" /* 14449 */;
import _mod14450 from "module_14450" /* 14450 */;


export default _mod14439 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14449("Symbol");
  let tmpResultResult = _mod14447(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14450(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14450;
  }
  return tmpResultResult;
});
