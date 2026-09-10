// Module ID: 14055
// Function ID: 14056
// Name: prerelease
// Dependencies: [14041]

// Module 14055 (prerelease)
import _mod14041 from "module_14041" /* 14041 */;


export default (arg0, arg1) => {
  const tmp = _mod14041(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
