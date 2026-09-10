// Module ID: 4055
// Function ID: 4056
// Dependencies: [4041, 3694]
// Exports: default

// Module 4055
import module_4041_mod from "module_4041" /* 4041 */;
import requiredArgs_mod from "requiredArgs" /* 3694 */;

let module_4041 = module_4041_mod;
if (!module_4041) {
  const obj = { default: module_4041 };
  let tmp3 = obj;
} else {
  tmp3 = module_4041;
}
module_4041 = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function isThisWeek(arg0, arg1) {
  requiredArgs.default(1, arguments);
  return module_4041.default(arg0, Date.now(), arg1);
};
export default exports.default;
