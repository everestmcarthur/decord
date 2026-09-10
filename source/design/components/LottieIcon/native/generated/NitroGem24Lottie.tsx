// Module ID: 14236
// Function ID: 14237
// Name: NitroGem24Lottie
// Dependencies: [19, 21, 10018, 14237, 2]

// Module 14236 (NitroGem24Lottie)
import LottieIcon from "LottieIcon" /* 10018 */;
import _mod14237 from "module_14237" /* 14237 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem24Lottie.tsx");

export const NitroGem24Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14237, animation: "all", ref, layers, markers: items });
});
