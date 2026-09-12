// Module ID: 14393
// Function ID: 14394
// Dependencies: [14389]

// Module 14393
import _mod14389 from "module_14389" /* 14389 */;


export default !_mod14389(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
