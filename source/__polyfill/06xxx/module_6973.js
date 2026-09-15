// Module ID: 6973
// Function ID: 6974
// Dependencies: [6974, 6975]

// Module 6973
import _mod6974 from "module_6974" /* 6974 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod6974(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
