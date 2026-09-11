// Module ID: 14082
// Function ID: 14083
// Name: prerelease
// Dependencies: [14068]

// Module 14082 (prerelease)
import _mod14068 from "module_14068" /* 14068 */;


export default (arg0, arg1) => {
  const tmp = _mod14068(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
