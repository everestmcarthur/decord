// Module ID: 14025
// Function ID: 14026
// Name: version
// Dependencies: [14018]

// Module 14025 (version)
import SemVer from "SemVer" /* 14018 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
