// Module ID: 14231
// Function ID: 14232
// Dependencies: [14223]

// Module 14231
import _mod14223 from "module_14223" /* 14223 */;


export default (str, arg1) => {
  const tmp = _mod14223;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
