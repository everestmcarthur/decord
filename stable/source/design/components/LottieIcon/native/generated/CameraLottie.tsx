// Module ID: 9953
// Function ID: 9954
// Name: CameraLottie
// Dependencies: [19, 21, 9954, 9955, 2]

// Module 9953 (CameraLottie)
import LottieIcon from "LottieIcon" /* 9954 */;
import _mod9955 from "module_9955" /* 9955 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod9955, ref, layers, markers: items });
});
