// Module ID: 4900
// Function ID: 4901
// Name: ToUint32
// Dependencies: [4901, 4918, 4919, 4921]

// Module 4900 (ToUint32)
import ToNumber from "ToNumber" /* 4901 */;
import _mod4918 from "module_4918" /* 4918 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4918(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4921)(tmp(4919)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
