// Module ID: 14166
// Function ID: 14167
// Name: MessageRequestLottie
// Dependencies: [19, 21, 9954, 14167, 2]

// Module 14166 (MessageRequestLottie)
import LottieIcon from "LottieIcon" /* 9954 */;
import _mod14167 from "module_14167" /* 14167 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 77 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MessageRequestLottie.tsx");

export const MessageRequestLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14167, animation: "all", ref, layers, markers: items });
});
