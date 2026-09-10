// Module ID: 14049
// Function ID: 14050
// Dependencies: [14041]

// Module 14049
import _mod14041 from "module_14041" /* 14041 */;


export default (str, arg1) => {
  const tmp = _mod14041;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
