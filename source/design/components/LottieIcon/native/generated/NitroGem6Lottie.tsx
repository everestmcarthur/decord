// Module ID: 14273
// Function ID: 14274
// Name: NitroGem6Lottie
// Dependencies: [19, 21, 10099, 14274, 2]

// Module 14273 (NitroGem6Lottie)
import LottieIcon from "LottieIcon" /* 10099 */;
import _mod14274 from "module_14274" /* 14274 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem6Lottie.tsx");

export const NitroGem6Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14274, animation: "all", ref, layers, markers: items });
});
