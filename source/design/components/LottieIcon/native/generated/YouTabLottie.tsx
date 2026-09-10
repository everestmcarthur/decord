// Module ID: 14214
// Function ID: 14215
// Name: YouTabLottie
// Dependencies: [19, 21, 10018, 14215, 2]

// Module 14214 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 10018 */;
import _mod14215 from "module_14215" /* 14215 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export const YouTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14215, animation: "all", ref, layers, markers: items });
});
