// Module ID: 14099
// Function ID: 14100
// Dependencies: [14091]

// Module 14099
import _mod14091 from "module_14091" /* 14091 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14091) {
      version = version.version;
    }
    const tmp72 = new _mod14091(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
