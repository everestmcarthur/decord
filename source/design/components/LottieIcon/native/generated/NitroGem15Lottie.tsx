// Module ID: 14160
// Function ID: 14161
// Name: items
// Dependencies: [19, 21, 9953, 14161, 2]

// Module 14160 (items)
import LottieIcon from "LottieIcon" /* 9953 */;
import registerAsset from "registerAsset" /* 14161 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_3 = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("set").fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem15Lottie.tsx");

export const NitroGem15Lottie = forwardRefResult;
