// Module ID: 14212
// Function ID: 14213
// Name: NitroGem18Lottie
// Dependencies: [19, 21, 10041, 14213, 2]

// Module 14212 (NitroGem18Lottie)
import LottieIcon from "LottieIcon" /* 10041 */;
import _mod14213 from "module_14213" /* 14213 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem18Lottie.tsx");

export const NitroGem18Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14213, animation: "all", ref, layers, markers: items });
});
