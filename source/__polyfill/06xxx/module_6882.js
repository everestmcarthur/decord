// Module ID: 6882
// Function ID: 6883
// Dependencies: [6883, 6884]

// Module 6882
import _mod6883 from "module_6883" /* 6883 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod6883(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
