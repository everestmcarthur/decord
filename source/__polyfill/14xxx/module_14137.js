// Module ID: 14137
// Function ID: 14138
// Dependencies: [14129]

// Module 14137
import _mod14129 from "module_14129" /* 14129 */;


export default (version, pre, major2, arg3, arg4) => {
  let tmp = arg4;
  let tmp2 = arg3;
  if (typeof major2 === "string") {
    tmp = arg3;
    tmp2 = major2;
  }
  try {
    if (version instanceof _mod14129) {
      version = version.version;
    }
    const tmp72 = new _mod14129(version, tmp3);
    return tmp72.inc(pre, tmp2, tmp).version;
  } catch (err) {
    return null;
  }
};
