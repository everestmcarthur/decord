// Module ID: 4690
// Function ID: 4691
// Dependencies: [660, 658, 659, 4686]

// Module 4690
import arrayPush from "arrayPush" /* 658 */;
import stubArray from "stubArray" /* 659 */;
import _mod660 from "module_660" /* 660 */;
import _mod4686 from "module_4686" /* 4686 */;

if (Object.getOwnPropertySymbols) {
  let fn = (arg0) => {
    let tmp = arg0;
    const items = [];
    if (arg0) {
      do {
        let tmp4 = arrayPush;
        let tmp4Result = tmp4(items, stubArray(tmp));
        tmp = _mod4686(tmp);
      } while (tmp);
    }
    return items;
  };
} else {
  fn = _mod660;
}

export default fn;
