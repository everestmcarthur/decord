// Module ID: 14146
// Function ID: 14147
// Name: MicrophoneLottie
// Dependencies: [19, 21, 9954, 14147, 2]

// Module 14146 (MicrophoneLottie)
import LottieIcon from "LottieIcon" /* 9954 */;
import _mod14147 from "module_14147" /* 14147 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14147, ref, layers, markers: items });
});
