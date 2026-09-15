// Module ID: 3997
// Function ID: 3998
// Dependencies: [3978, 3733]
// Exports: default

// Module 3997
import _mod3733 from "module_3733" /* 3733 */;
import assign_mod from "assign" /* 3978 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function getDefaultOptions() {
  return assign.default({}, _mod3733.getDefaultOptions());
};
export default exports.default;
