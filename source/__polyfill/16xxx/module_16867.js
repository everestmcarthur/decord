// Module ID: 16867
// Function ID: 16868
// Dependencies: [8460]

// Module 16867
import _mod8460 from "module_8460" /* 8460 */;


export default _mod8460((arg0, arg1, arg2) => {
  let num = 1;
  if (arg2) {
    num = 0;
  }
  arg0[num].push(arg1);
}, () => {
  const items = [[], []];
  return items;
});
