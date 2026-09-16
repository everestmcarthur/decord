// Module ID: 14265
// Function ID: 14266
// Name: NitroGem6Lottie
// Dependencies: [19, 21, 10088, 14266, 2]

// Module 14265 (NitroGem6Lottie)
import LottieIcon from "LottieIcon" /* 10088 */;
import _mod14266 from "module_14266" /* 14266 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem6Lottie.tsx");

export const NitroGem6Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14266, animation: "all", ref, layers, markers: items });
});
