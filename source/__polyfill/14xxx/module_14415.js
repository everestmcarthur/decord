// Module ID: 14415
// Function ID: 14416
// Dependencies: [14367, 14374]

// Module 14415
import _mod14367 from "module_14367" /* 14367 */;
import _mod14374 from "module_14374" /* 14374 */;

let closure_2 = _mod14367("keys");

export default (arg0) => {
  let tmp2 = closure_2[arg0];
  if (!tmp2) {
    const tmp5 = _mod14374(arg0);
    tmp[arg0] = tmp5;
    tmp2 = tmp5;
  }
  return tmp2;
};
