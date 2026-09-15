// Module ID: 14247
// Function ID: 14248
// Name: NitroGem6Lottie
// Dependencies: [19, 21, 10080, 14248, 2]

// Module 14247 (NitroGem6Lottie)
import LottieIcon from "LottieIcon" /* 10080 */;
import _mod14248 from "module_14248" /* 14248 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem6Lottie.tsx");

export const NitroGem6Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14248, animation: "all", ref, layers, markers: items });
});
