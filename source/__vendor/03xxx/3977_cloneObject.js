// Module ID: 3977
// Function ID: 3978
// Name: cloneObject
// Dependencies: [3978]
// Exports: default

// Module 3977 (cloneObject)
import assign_mod from "assign" /* 3978 */;

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
