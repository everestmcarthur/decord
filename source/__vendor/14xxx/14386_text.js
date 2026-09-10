// Module ID: 14386
// Function ID: 14387
// Name: text
// Dependencies: [14387, 14401]

// Module 14386 (text)
import _mod14387 from "module_14387" /* 14387 */;
import _mod14401 from "module_14401" /* 14401 */;


export default (arg0) => {
  const tmp = _mod14387(arg0, "string");
  let text = tmp;
  if (!_mod14401(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
