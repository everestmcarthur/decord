// Module ID: 14194
// Function ID: 14195
// Name: NotificationsTabLottie
// Dependencies: [19, 21, 10041, 14195, 2]

// Module 14194 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 10041 */;
import _mod14195 from "module_14195" /* 14195 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14195, animation: "all", ref, layers, markers: items });
});
