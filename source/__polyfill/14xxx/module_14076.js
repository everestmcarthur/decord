// Module ID: 14076
// Function ID: 14077
// Dependencies: [14068]

// Module 14076
import _mod14068 from "module_14068" /* 14068 */;


export default (str, arg1) => {
  const tmp = _mod14068;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
