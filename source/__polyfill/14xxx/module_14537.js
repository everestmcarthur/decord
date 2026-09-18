// Module ID: 14537
// Function ID: 14538
// Dependencies: [14516]

// Module 14537
import _mod14516 from "module_14516" /* 14516 */;

const tmp = _mod14516.navigator && _mod14516.navigator.userAgent;
let str = "";
if (tmp) {
  const _String = String;
  str = String(tmp);
}

export default str;
