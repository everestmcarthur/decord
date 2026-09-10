// Module ID: 14104
// Function ID: 14105
// Name: prerelease
// Dependencies: [14090]

// Module 14104 (prerelease)
import _mod14090 from "module_14090" /* 14090 */;


export default (arg0, arg1) => {
  const tmp = _mod14090(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
