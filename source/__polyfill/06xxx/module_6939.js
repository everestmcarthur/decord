// Module ID: 6939
// Function ID: 6940
// Dependencies: [6940, 6941]

// Module 6939
import _mod6940 from "module_6940" /* 6940 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod6940(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
