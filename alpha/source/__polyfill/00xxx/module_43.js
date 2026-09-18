// Module ID: 43
// Function ID: 44
// Dependencies: [44, 45]

// Module 43
import _mod44 from "module_44" /* 44 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod44(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
