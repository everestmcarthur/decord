// Module ID: 3932
// Function ID: 3933
// Dependencies: [3913, 3668]
// Exports: default

// Module 3932
import _mod3668 from "module_3668" /* 3668 */;
import assign_mod from "assign" /* 3913 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3668.getDefaultOptions());
};
export default exports.default;
