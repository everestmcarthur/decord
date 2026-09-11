// Module ID: 14379
// Function ID: 14380
// Dependencies: [14370, 14380, 14378, 14381]

// Module 14379
import _mod14370 from "module_14370" /* 14370 */;
import _mod14378 from "module_14378" /* 14378 */;
import _mod14380 from "module_14380" /* 14380 */;
import _mod14381 from "module_14381" /* 14381 */;


export default _mod14370 ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = _mod14380("Symbol");
  let tmpResultResult = _mod14378(tmp3);
  if (tmpResultResult) {
    tmpResultResult = _mod14381(tmp3.prototype, Object(arg0));
    const tmpResult = _mod14381;
  }
  return tmpResultResult;
});
