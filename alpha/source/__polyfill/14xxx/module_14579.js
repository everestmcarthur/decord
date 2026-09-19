// Module ID: 14579
// Function ID: 14580
// Dependencies: [14575]

// Module 14579
import _mod14575 from "module_14575" /* 14575 */;


export default !_mod14575(() => {
  const fn = () => {

  };
  const bindResult = fn.bind();
  let hasOwnPropertyResult = typeof bindResult !== "function";
  if (typeof bindResult === "function") {
    hasOwnPropertyResult = bindResult.hasOwnProperty("prototype");
  }
  return hasOwnPropertyResult;
});
