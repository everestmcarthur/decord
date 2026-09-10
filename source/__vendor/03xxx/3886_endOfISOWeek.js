// Module ID: 3886
// Function ID: 3887
// Name: endOfISOWeek
// Dependencies: [3887, 3664]
// Exports: default

// Module 3886 (endOfISOWeek)
import endOfWeek_mod from "endOfWeek" /* 3887 */;
import requiredArgs_mod from "requiredArgs" /* 3664 */;

let endOfWeek = endOfWeek_mod;
if (!endOfWeek) {
  const obj = { default: endOfWeek };
  let tmp3 = obj;
} else {
  tmp3 = endOfWeek;
}
endOfWeek = tmp3;
let requiredArgs = requiredArgs_mod;
if (!requiredArgs) {
  const obj2 = { default: requiredArgs };
  let tmp5 = obj2;
} else {
  tmp5 = requiredArgs;
}
requiredArgs = tmp5;

export default function endOfISOWeek(arg0) {
  requiredArgs.default(1, arguments);
  return endOfWeek.default(arg0, { weekStartsOn: 1 });
};
export default exports.default;
