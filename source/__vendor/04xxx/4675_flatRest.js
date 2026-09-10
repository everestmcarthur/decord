// Module ID: 4675
// Function ID: 4676
// Name: flatRest
// Dependencies: [4676, 4686]

// Module 4675 (flatRest)
import _mod4676 from "module_4676" /* 4676 */;
import basePick from "basePick" /* 4686 */;


export default _mod4676((arg0, arg1) => {
  if (null == arg0) {
    let obj = {};
  } else {
    obj = basePick(arg0, arg1);
  }
  return obj;
});
