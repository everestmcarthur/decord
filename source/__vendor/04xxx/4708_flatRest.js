// Module ID: 4708
// Function ID: 4709
// Name: flatRest
// Dependencies: [4709, 4719]

// Module 4708 (flatRest)
import _mod4709 from "module_4709" /* 4709 */;
import basePick from "basePick" /* 4719 */;


export default _mod4709((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
