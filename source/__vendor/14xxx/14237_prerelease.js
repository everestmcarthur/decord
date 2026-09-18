// Module ID: 14237
// Function ID: 14238
// Name: prerelease
// Dependencies: [14223]

// Module 14237 (prerelease)
import _mod14223 from "module_14223" /* 14223 */;


export default (arg0, arg1) => {
  const tmp = _mod14223(arg0, arg1);
  let prerelease = null;
  if (tmp) {
    prerelease = null;
    if (tmp.prerelease.length) {
      prerelease = tmp.prerelease;
    }
  }
  return prerelease;
};
