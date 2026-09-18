// Module ID: 14358
// Function ID: 14359
// Name: NotificationsTabLottie
// Dependencies: [19, 21, 10193, 14359, 2]

// Module 14358 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 10193 */;
import _mod14359 from "module_14359" /* 14359 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14359, animation: "all", ref, layers, markers: items });
});
