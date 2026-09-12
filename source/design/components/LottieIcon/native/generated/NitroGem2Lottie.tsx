// Module ID: 14233
// Function ID: 14234
// Name: NitroGem2Lottie
// Dependencies: [19, 21, 10078, 14234, 2]

// Module 14233 (NitroGem2Lottie)
import LottieIcon from "LottieIcon" /* 10078 */;
import _mod14234 from "module_14234" /* 14234 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem2Lottie.tsx");

export const NitroGem2Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14234, animation: "all", ref, layers, markers: items });
});
