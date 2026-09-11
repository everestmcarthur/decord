// Module ID: 14360
// Function ID: 14361
// Dependencies: [14356]

// Module 14360
import _mod14356 from "module_14356" /* 14356 */;


export default !_mod14356(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
