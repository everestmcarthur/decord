// Module ID: 14152
// Function ID: 14153
// Name: NitroGem3Lottie
// Dependencies: [19, 21, 9954, 14153, 2]

// Module 14152 (NitroGem3Lottie)
import LottieIcon from "LottieIcon" /* 9954 */;
import _mod14153 from "module_14153" /* 14153 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx");

export const NitroGem3Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14153, animation: "all", ref, layers, markers: items });
});
