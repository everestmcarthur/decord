// Module ID: 14162
// Function ID: 14163
// Name: items
// Dependencies: [19, 21, 9953, 14163, 2]

// Module 14162 (items)
import LottieIcon from "LottieIcon" /* 9953 */;
import registerAsset from "registerAsset" /* 14163 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_3 = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("set").fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem18Lottie.tsx");

export const NitroGem18Lottie = forwardRefResult;
