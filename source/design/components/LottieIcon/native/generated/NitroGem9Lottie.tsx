// Module ID: 14249
// Function ID: 14250
// Name: NitroGem9Lottie
// Dependencies: [19, 21, 10080, 14250, 2]

// Module 14249 (NitroGem9Lottie)
import LottieIcon from "LottieIcon" /* 10080 */;
import _mod14250 from "module_14250" /* 14250 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem9Lottie.tsx");

export const NitroGem9Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14250, animation: "all", ref, layers, markers: items });
});
