// Module ID: 4834
// Function ID: 4835
// Name: ToUint32
// Dependencies: [4835, 4852, 4853, 4855]

// Module 4834 (ToUint32)
import ToNumber from "ToNumber" /* 4835 */;
import _mod4852 from "module_4852" /* 4852 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4852(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4855)(tmp(4853)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
