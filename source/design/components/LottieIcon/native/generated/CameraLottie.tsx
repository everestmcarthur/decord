// Module ID: 10079
// Function ID: 10080
// Name: CameraLottie
// Dependencies: [19, 21, 10080, 10081, 2]

// Module 10079 (CameraLottie)
import LottieIcon from "LottieIcon" /* 10080 */;
import _mod10081 from "module_10081" /* 10081 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod10081, ref, layers, markers: items });
});
