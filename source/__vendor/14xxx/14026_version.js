// Module ID: 14026
// Function ID: 14027
// Name: version
// Dependencies: [14018]

// Module 14026 (version)
import SemVer from "SemVer" /* 14018 */;


export default (str) => {
  const tmp = SemVer;
  const tmpResult = tmp(str.trim().replace(/^[=v]+/, ""), arg1);
  let version = null;
  if (tmpResult) {
    version = tmpResult.version;
  }
  return version;
};
