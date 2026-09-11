// Module ID: 14192
// Function ID: 14193
// Name: YouTabLottie
// Dependencies: [19, 21, 10041, 14193, 2]

// Module 14192 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 10041 */;
import _mod14193 from "module_14193" /* 14193 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export const YouTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14193, animation: "all", ref, layers, markers: items });
});
