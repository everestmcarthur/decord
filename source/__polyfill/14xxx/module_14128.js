// Module ID: 14128
// Function ID: 14129
// Dependencies: [14120]

// Module 14128
import _mod14120 from "module_14120" /* 14120 */;


export default (str, arg1) => {
  const tmp = _mod14120;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
