// Module ID: 14286
// Function ID: 14287
// Dependencies: [14278]

// Module 14286
import _mod14278 from "module_14278" /* 14278 */;


export default (str, arg1) => {
  const tmp = _mod14278;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
