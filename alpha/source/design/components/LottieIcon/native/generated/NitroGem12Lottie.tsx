// Module ID: 14427
// Function ID: 14428
// Name: NitroGem12Lottie
// Dependencies: [19, 21, 10205, 14428, 2]

// Module 14427 (NitroGem12Lottie)
import LottieIcon from "LottieIcon" /* 10205 */;
import _mod14428 from "module_14428" /* 14428 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem12Lottie.tsx");

export const NitroGem12Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14428, animation: "all", ref, layers, markers: items });
});
