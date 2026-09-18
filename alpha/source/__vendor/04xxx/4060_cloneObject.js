// Module ID: 4060
// Function ID: 4061
// Name: cloneObject
// Dependencies: [4061]
// Exports: default

// Module 4060 (cloneObject)
import assign_mod from "assign" /* 4061 */;

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
