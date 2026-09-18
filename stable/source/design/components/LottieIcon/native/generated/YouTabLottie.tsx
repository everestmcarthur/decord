// Module ID: 14142
// Function ID: 14143
// Name: YouTabLottie
// Dependencies: [19, 21, 9954, 14143, 2]

// Module 14142 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 9954 */;
import _mod14143 from "module_14143" /* 14143 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export const YouTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14143, animation: "all", ref, layers, markers: items });
});
