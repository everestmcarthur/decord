// Module ID: 3899
// Function ID: 3900
// Name: cloneObject
// Dependencies: [3900]
// Exports: default

// Module 3899 (cloneObject)
import assign_mod from "assign" /* 3900 */;

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
