// Module ID: 14026
// Function ID: 14027
// Dependencies: [14018]

// Module 14026
import _mod14018 from "module_14018" /* 14018 */;


export default (str, arg1) => {
  const tmp = _mod14018;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
