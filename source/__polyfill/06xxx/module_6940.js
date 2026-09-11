// Module ID: 6940
// Function ID: 6941
// Dependencies: [6941, 6942]

// Module 6940
import _mod6941 from "module_6941" /* 6941 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod6941(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
