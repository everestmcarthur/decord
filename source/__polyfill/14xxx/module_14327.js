// Module ID: 14327
// Function ID: 14328
// Dependencies: [14318, 14328, 14326, 14329]

// Module 14327
import prop from "prop" /* 14318 */;
import all from "all" /* 14326 */;
import all2 from "all" /* 14328 */;
import call from "call" /* 14329 */;


export default prop ? ((arg0) => typeof arg0 === "symbol") : ((arg0) => {
  const tmp3 = all2("Symbol");
  let tmpResultResult = all(tmp3);
  if (tmpResultResult) {
    tmpResultResult = call(tmp3.prototype, Object(arg0));
    const tmpResult = call;
  }
  return tmpResultResult;
});
