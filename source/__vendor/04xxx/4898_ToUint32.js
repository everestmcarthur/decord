// Module ID: 4898
// Function ID: 4899
// Name: ToUint32
// Dependencies: [4899, 4916, 4917, 4919]

// Module 4898 (ToUint32)
import ToNumber from "ToNumber" /* 4899 */;
import _mod4916 from "module_4916" /* 4916 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4916(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4919)(tmp(4917)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
