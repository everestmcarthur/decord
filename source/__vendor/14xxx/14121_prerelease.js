// Module ID: 14121
// Function ID: 14122
// Name: prerelease
// Dependencies: [14107]

// Module 14121 (prerelease)
import _mod14107 from "module_14107" /* 14107 */;


export default (arg0, arg1) => {
  const tmp = _mod14107(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
