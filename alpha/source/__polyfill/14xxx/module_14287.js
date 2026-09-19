// Module ID: 14287
// Function ID: 14288
// Dependencies: [14279]

// Module 14287
import _mod14279 from "module_14279" /* 14279 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14279) {
      version = version.version;
    }
    const tmp72 = new _mod14279(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
