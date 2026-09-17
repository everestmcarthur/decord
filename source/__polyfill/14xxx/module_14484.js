// Module ID: 14484
// Function ID: 14485
// Dependencies: [14436, 14443]

// Module 14484
import _mod14436 from "module_14436" /* 14436 */;
import _mod14443 from "module_14443" /* 14443 */;

let closure_2 = _mod14436("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod14443(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
