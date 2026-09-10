// Module ID: 14098
// Function ID: 14099
// Dependencies: [14090]

// Module 14098
import _mod14090 from "module_14090" /* 14090 */;


export default (str, arg1) => {
  const tmp = _mod14090;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
