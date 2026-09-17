// Module ID: 6979
// Function ID: 6980
// Dependencies: [6980, 6981]

// Module 6979
import _mod6980 from "module_6980" /* 6980 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod6980(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
