// Module ID: 14109
// Function ID: 14110
// Dependencies: [14101]

// Module 14109
import _mod14101 from "module_14101" /* 14101 */;


export default (str, arg1) => {
  const tmp = _mod14101;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
