// Module ID: 14080
// Function ID: 14081
// Name: prerelease
// Dependencies: [14066]

// Module 14080 (prerelease)
import _mod14066 from "module_14066" /* 14066 */;


export default (arg0, arg1) => {
  const tmp = _mod14066(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
