// Module ID: 16830
// Function ID: 16831
// Dependencies: [8433]

// Module 16830
import _mod8433 from "module_8433" /* 8433 */;


export default _mod8433((arg0, arg1, arg2) => {
  let num = 1;
  if (arg2) {
    num = 0;
  }
  arg0[num].push(arg1);
}, () => {
  const items = [[], []];
  return items;
});
