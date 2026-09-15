// Module ID: 14115
// Function ID: 14116
// Dependencies: [14107]

// Module 14115
import _mod14107 from "module_14107" /* 14107 */;


export default (str, arg1) => {
  const tmp = _mod14107;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
