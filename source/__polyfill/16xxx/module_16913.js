// Module ID: 16913
// Function ID: 16914
// Dependencies: [8520]

// Module 16913
import _mod8520 from "module_8520" /* 8520 */;


export default _mod8520((arg0, arg1, arg2) => {
  let num = 1;
  if (arg2) {
    num = 0;
  }
  arg0[num].push(arg1);
}, () => {
  const items = [[], []];
  return items;
});
