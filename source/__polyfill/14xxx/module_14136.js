// Module ID: 14136
// Function ID: 14137
// Dependencies: [14128]

// Module 14136
import _mod14128 from "module_14128" /* 14128 */;


export default (str, arg1) => {
  const tmp = _mod14128;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
