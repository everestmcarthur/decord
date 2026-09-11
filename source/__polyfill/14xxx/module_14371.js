// Module ID: 14371
// Function ID: 14372
// Dependencies: [14350]

// Module 14371
import _mod14350 from "module_14350" /* 14350 */;

const tmp = _mod14350.navigator && _mod14350.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
