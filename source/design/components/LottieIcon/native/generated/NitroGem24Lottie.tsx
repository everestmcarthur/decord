// Module ID: 14214
// Function ID: 14215
// Name: NitroGem24Lottie
// Dependencies: [19, 21, 10041, 14215, 2]

// Module 14214 (NitroGem24Lottie)
import LottieIcon from "LottieIcon" /* 10041 */;
import _mod14215 from "module_14215" /* 14215 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem24Lottie.tsx");

export const NitroGem24Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14215, animation: "all", ref, layers, markers: items });
});
