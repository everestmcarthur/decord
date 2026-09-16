// Module ID: 14129
// Function ID: 14130
// Dependencies: [14121]

// Module 14129
import _mod14121 from "module_14121" /* 14121 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14121) {
      version = version.version;
    }
    const tmp72 = new _mod14121(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
