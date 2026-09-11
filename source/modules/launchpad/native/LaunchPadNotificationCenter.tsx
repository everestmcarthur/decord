// Module ID: 17078
// Function ID: 17079
// Name: LaunchPadNotificationCenter
// Dependencies: [19, 21, 4606, 16472, 2]

// Module 17078 (LaunchPadNotificationCenter)
import notifications_NotificationsDefault from "notifications/Notifications" /* 16472 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4606);
let closure_3 = createStyles.createStyles({ wrapper: { height: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default noop.memo(function NotificationsContent() {
  const tmp = closure_3();
  return jsx(notifications_NotificationsDefault, { style: closure_3().wrapper, nestedInLaunchPad: true });
});
