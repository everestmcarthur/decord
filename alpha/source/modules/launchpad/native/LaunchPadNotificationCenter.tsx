// Module ID: 17371
// Function ID: 17372
// Name: LaunchPadNotificationCenter
// Dependencies: [19, 21, 4722, 16658, 2]

// Module 17371 (LaunchPadNotificationCenter)
import notifications_NotificationsDefault from "notifications/Notifications" /* 16658 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_3 = createStyles.createStyles({ wrapper: { height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default noop.memo(function NotificationsContent() {
  const tmp = closure_3();
  return jsx(notifications_NotificationsDefault, { style: closure_3().wrapper, nestedInLaunchPad: true });
});
