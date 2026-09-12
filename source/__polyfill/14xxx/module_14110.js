// Module ID: 14110
// Function ID: 14111
// Dependencies: [14102]

// Module 14110
import _mod14102 from "module_14102" /* 14102 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14102) {
      version = version.version;
    }
    const tmp72 = new _mod14102(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
