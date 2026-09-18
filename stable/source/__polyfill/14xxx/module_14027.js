// Module ID: 14027
// Function ID: 14028
// Dependencies: [14019]

// Module 14027
import _mod14019 from "module_14019" /* 14019 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14019) {
      version = version.version;
    }
    const tmp72 = new _mod14019(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
