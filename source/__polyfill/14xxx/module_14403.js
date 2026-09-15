// Module ID: 14403
// Function ID: 14404
// Dependencies: [14399]

// Module 14403
import _mod14399 from "module_14399" /* 14399 */;


export default !_mod14399(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
