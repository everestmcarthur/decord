// Module ID: 14364
// Function ID: 14365
// Name: text
// Dependencies: [14365, 14379]

// Module 14364 (text)
import _mod14365 from "module_14365" /* 14365 */;
import _mod14379 from "module_14379" /* 14379 */;


export default (arg0) => {
  const tmp = _mod14365(arg0, "string");
  let text = tmp;
  if (!_mod14379(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
