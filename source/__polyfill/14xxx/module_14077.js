// Module ID: 14077
// Function ID: 14078
// Dependencies: [14069]

// Module 14077
import _mod14069 from "module_14069" /* 14069 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14069) {
      version = version.version;
    }
    const tmp72 = new _mod14069(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
