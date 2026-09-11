// Module ID: 4867
// Function ID: 4868
// Name: ToUint32
// Dependencies: [4868, 4885, 4886, 4888]

// Module 4867 (ToUint32)
import ToNumber from "ToNumber" /* 4868 */;
import _mod4885 from "module_4885" /* 4885 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4885(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4888)(tmp(4886)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
