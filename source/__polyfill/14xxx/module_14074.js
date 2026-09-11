// Module ID: 14074
// Function ID: 14075
// Dependencies: [14066]

// Module 14074
import _mod14066 from "module_14066" /* 14066 */;


export default (str, arg1) => {
  const tmp = _mod14066;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
