// Module ID: 14206
// Function ID: 14207
// Name: NitroGem9Lottie
// Dependencies: [19, 21, 10041, 14207, 2]

// Module 14206 (NitroGem9Lottie)
import LottieIcon from "LottieIcon" /* 10041 */;
import _mod14207 from "module_14207" /* 14207 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem9Lottie.tsx");

export const NitroGem9Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14207, animation: "all", ref, layers, markers: items });
});
