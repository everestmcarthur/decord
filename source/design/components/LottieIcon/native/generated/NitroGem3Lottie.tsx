// Module ID: 14200
// Function ID: 14201
// Name: NitroGem3Lottie
// Dependencies: [19, 21, 10039, 14201, 2]

// Module 14200 (NitroGem3Lottie)
import LottieIcon from "LottieIcon" /* 10039 */;
import _mod14201 from "module_14201" /* 14201 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx");

export const NitroGem3Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14201, animation: "all", ref, layers, markers: items });
});
