// Module ID: 14075
// Function ID: 14076
// Dependencies: [14067]

// Module 14075
import _mod14067 from "module_14067" /* 14067 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14067) {
      version = version.version;
    }
    const tmp72 = new _mod14067(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
