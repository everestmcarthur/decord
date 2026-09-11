// Module ID: 14216
// Function ID: 14217
// Name: MessageRequestLottie
// Dependencies: [19, 21, 10041, 14217, 2]

// Module 14216 (MessageRequestLottie)
import LottieIcon from "LottieIcon" /* 10041 */;
import _mod14217 from "module_14217" /* 14217 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 77 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MessageRequestLottie.tsx");

export const MessageRequestLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14217, animation: "all", ref, layers, markers: items });
});
