// Module ID: 3919
// Function ID: 3920
// Dependencies: [3900, 3655]
// Exports: default

// Module 3919
import _mod3655 from "module_3655" /* 3655 */;
import assign_mod from "assign" /* 3900 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3655.getDefaultOptions());
};
export default exports.default;
