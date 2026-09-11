// Module ID: 4707
// Function ID: 4708
// Name: flatRest
// Dependencies: [4708, 4718]

// Module 4707 (flatRest)
import _mod4708 from "module_4708" /* 4708 */;
import basePick from "basePick" /* 4718 */;


export default _mod4708((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
