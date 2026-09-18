// Module ID: 14232
// Function ID: 14233
// Dependencies: [14224]

// Module 14232
import _mod14224 from "module_14224" /* 14224 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14224) {
      version = version.version;
    }
    const tmp72 = new _mod14224(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
