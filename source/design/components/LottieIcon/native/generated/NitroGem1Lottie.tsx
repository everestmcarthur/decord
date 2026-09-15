// Module ID: 14241
// Function ID: 14242
// Name: NitroGem1Lottie
// Dependencies: [19, 21, 10080, 14242, 2]

// Module 14241 (NitroGem1Lottie)
import LottieIcon from "LottieIcon" /* 10080 */;
import _mod14242 from "module_14242" /* 14242 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem1Lottie.tsx");

export const NitroGem1Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14242, animation: "all", ref, layers, markers: items });
});
