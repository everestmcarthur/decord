// Module ID: 14115
// Function ID: 14116
// Name: prerelease
// Dependencies: [14101]

// Module 14115 (prerelease)
import _mod14101 from "module_14101" /* 14101 */;


export default (arg0, arg1) => {
  const tmp = _mod14101(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
