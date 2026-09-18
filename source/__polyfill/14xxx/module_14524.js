// Module ID: 14524
// Function ID: 14525
// Dependencies: [14520]

// Module 14524
import _mod14520 from "module_14520" /* 14520 */;


export default !_mod14520(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
