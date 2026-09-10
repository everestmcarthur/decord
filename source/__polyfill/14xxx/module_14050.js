// Module ID: 14050
// Function ID: 14051
// Dependencies: [14042]

// Module 14050
import _mod14042 from "module_14042" /* 14042 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14042) {
      version = version.version;
    }
    const tmp72 = new _mod14042(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
