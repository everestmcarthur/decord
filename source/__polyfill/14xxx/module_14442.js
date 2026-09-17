// Module ID: 14442
// Function ID: 14443
// Dependencies: [14421]

// Module 14442
import _mod14421 from "module_14421" /* 14421 */;

const tmp = _mod14421.navigator && _mod14421.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
