// Module ID: 14032
// Function ID: 14033
// Name: prerelease
// Dependencies: [14018]

// Module 14032 (prerelease)
import SemVer from "SemVer" /* 14018 */;


export default (arg0, arg1) => {
  const tmp = SemVer(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
