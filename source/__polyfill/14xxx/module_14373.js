// Module ID: 14373
// Function ID: 14374
// Dependencies: [14352]

// Module 14373
import _mod14352 from "module_14352" /* 14352 */;

const tmp = _mod14352.navigator && _mod14352.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
