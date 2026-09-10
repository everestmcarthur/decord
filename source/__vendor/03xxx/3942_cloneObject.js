// Module ID: 3942
// Function ID: 3943
// Name: cloneObject
// Dependencies: [3943]
// Exports: default

// Module 3942 (cloneObject)
import assign_mod from "assign" /* 3943 */;

let assign = assign_mod;
if (!assign) {
  const obj = { default: assign };
  let tmp3 = obj;
} else {
  tmp3 = assign;
}
assign = tmp3;

export default function cloneObject(arg0) {
  return assign.default({}, arg0);
};
export default exports.default;
