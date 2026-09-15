// Module ID: 14416
// Function ID: 14417
// Dependencies: [14395]

// Module 14416
import _mod14395 from "module_14395" /* 14395 */;

const tmp = _mod14395.navigator && _mod14395.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
