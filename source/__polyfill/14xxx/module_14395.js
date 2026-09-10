// Module ID: 14395
// Function ID: 14396
// Dependencies: [14374]

// Module 14395
import _mod14374 from "module_14374" /* 14374 */;

const tmp = _mod14374.navigator && _mod14374.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
