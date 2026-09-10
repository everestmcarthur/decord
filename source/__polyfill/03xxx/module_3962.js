// Module ID: 3962
// Function ID: 3963
// Dependencies: [3943, 3698]
// Exports: default

// Module 3962
import _mod3698 from "module_3698" /* 3698 */;
import assign_mod from "assign" /* 3943 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3698.getDefaultOptions());
};
export default exports.default;
