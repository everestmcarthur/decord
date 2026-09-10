// Module ID: 3850
// Function ID: 3851
// Name: differenceInCalendarQuarters
// Dependencies: [3851, 3663, 3664]
// Exports: default

// Module 3850 (differenceInCalendarQuarters)
import module_3851_mod from "module_3851" /* 3851 */;
import _typeof_mod from "module_3663" /* 3663 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let module_3851 = module_3851_mod;
if (!module_3851) {
  const obj = { default: module_3851 };
  let tmp3 = obj;
} else {
  tmp3 = module_3851;
}
module_3851 = tmp3;
let _typeof = _typeof_mod;
if (!_typeof) {
  const obj2 = { default: _typeof };
  let tmp5 = obj2;
} else {
  tmp5 = _typeof;
}
_typeof = tmp5;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj3 = { default: requiredArgs };
  let tmp7 = obj3;
} else {
  tmp7 = requiredArgs;
}
requiredArgs = tmp7;

export default function differenceInCalendarQuarters(arg0, arg1) {
  requiredArgs.default(2, arguments);
  const defaultResult1 = _typeof.default(arg0);
  const defaultResult2 = _typeof.default(arg1);
  const fullYear = defaultResult1.getFullYear();
  const diff = fullYear - defaultResult2.getFullYear();
  return 4 * diff + (module_3851.default(defaultResult1) - module_3851.default(defaultResult2));
};
export default exports.default;
