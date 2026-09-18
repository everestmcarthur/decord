// Module ID: 6868
// Function ID: 6869
// Dependencies: [6869, 6870]

// Module 6868
import _mod6869 from "module_6869" /* 6869 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod6869(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
