// Module ID: 11101
// Function ID: 11102
// Name: items
// Dependencies: [19, 21, 9953, 11102, 2]

// Module 11101 (items)
import LottieIcon from "LottieIcon" /* 9953 */;
import registerAsset from "registerAsset" /* 11102 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_3 = ["Orbs-Spend_DarkTheme", "Orbs-Earn_DarkTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, ref, layers: closure_3, markers: items });
});
const result = require("set").fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = forwardRefResult;
