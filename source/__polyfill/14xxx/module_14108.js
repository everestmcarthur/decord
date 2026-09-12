// Module ID: 14108
// Function ID: 14109
// Dependencies: [14101]

// Module 14108
import _mod14101 from "module_14101" /* 14101 */;


export default (arg0, arg1) => {
  const tmp = _mod14101(arg0, arg1);
  let version = null;
  if (tmp) {
    version = tmp.version;
  }
  return version;
};
