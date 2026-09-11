// Module ID: 6961
// Function ID: 6962
// Dependencies: [6959]

// Module 6961
import _mod6959 from "module_6959" /* 6959 */;


export default function _superPropBase(arg0, key10009) {
  hasOwnProperty = {}.hasOwnProperty;
  const call = hasOwnProperty.call;
  let tmp = arg0;
  if (!(typeof call === "unknown" ? hasOwnProperty(key10009) : call(arg0, key10009))) {
    let tmp4 = _mod6959(arg0);
    tmp = tmp4;
    if (null !== tmp4) {
      while (true) {
        let hasOwnProperty2 = {}.hasOwnProperty;
        let call2 = hasOwnProperty2.call;
        tmp = tmp4;
        if (typeof call2 === "unknown" ? hasOwnProperty2(key10009) : call2(tmp4, key10009)) {
          break;
        } else {
          tmp4 = _mod6959(tmp4);
          tmp = tmp4;
          if (null === tmp4) {
            break;
          }
        }
      }
    }
  }
  return tmp;
};
