// Module ID: 14434
// Function ID: 14435
// Dependencies: [14413]

// Module 14434
import _mod14413 from "module_14413" /* 14413 */;

const tmp = _mod14413.navigator && _mod14413.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
