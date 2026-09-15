// Module ID: 4899
// Function ID: 4900
// Name: ToUint32
// Dependencies: [4900, 4917, 4918, 4920]

// Module 4899 (ToUint32)
import ToNumber from "ToNumber" /* 4900 */;
import _mod4917 from "module_4917" /* 4917 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4917(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4920)(tmp(4918)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
