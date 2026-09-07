// Module ID: 14308
// Function ID: 14309
// Dependencies: [14304]

// Module 14308
import _mod14304 from "module_14304" /* 14304 */;


export default !_mod14304(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
