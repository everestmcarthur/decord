// Module ID: 4865
// Function ID: 4866
// Name: ToUint32
// Dependencies: [4866, 4883, 4884, 4886]

// Module 4865 (ToUint32)
import ToNumber from "ToNumber" /* 4866 */;
import _mod4883 from "module_4883" /* 4883 */;


export default function ToUint32(arg0) {
  const tmp3 = ToNumber(arg0);
  if (_mod4883(tmp3)) {
    if (0 !== tmp3) {
      const tmp5 = tmp(4886)(tmp(4884)(tmp3), 4294967296);
      let num3 = 0;
      if (0 !== tmp5) {
        num3 = tmp5;
      }
      return num3;
    }
  }
  return 0;
};
