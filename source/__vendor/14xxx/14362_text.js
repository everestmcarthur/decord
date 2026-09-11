// Module ID: 14362
// Function ID: 14363
// Name: text
// Dependencies: [14363, 14377]

// Module 14362 (text)
import _mod14363 from "module_14363" /* 14363 */;
import _mod14377 from "module_14377" /* 14377 */;


export default (arg0) => {
  const tmp = _mod14363(arg0, "string");
  let text = tmp;
  if (!_mod14377(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
