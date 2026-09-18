// Module ID: 14528
// Function ID: 14529
// Name: text
// Dependencies: [14529, 14543]

// Module 14528 (text)
import _mod14529 from "module_14529" /* 14529 */;
import _mod14543 from "module_14543" /* 14543 */;


export default (arg0) => {
  const tmp = _mod14529(arg0, "string");
  let text = tmp;
  if (!_mod14543(tmp)) {
    text = `${tmp}`;
  }
  return text;
};
