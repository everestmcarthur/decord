// Module ID: 14285
// Function ID: 14286
// Name: MessageRequestLottie
// Dependencies: [19, 21, 10099, 14286, 2]

// Module 14285 (MessageRequestLottie)
import LottieIcon from "LottieIcon" /* 10099 */;
import _mod14286 from "module_14286" /* 14286 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 77 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MessageRequestLottie.tsx");

export const MessageRequestLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14286, animation: "all", ref, layers, markers: items });
});
