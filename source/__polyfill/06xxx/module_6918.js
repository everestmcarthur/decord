// Module ID: 6918
// Function ID: 6919
// Dependencies: [6919, 6920]

// Module 6918
import _mod6919 from "module_6919" /* 6919 */;


export default function toPropertyKey(arg0) {
  const tmp = _mod6919(arg0, "string");
  let text = tmp;
  if ("symbol" != obj.default(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
