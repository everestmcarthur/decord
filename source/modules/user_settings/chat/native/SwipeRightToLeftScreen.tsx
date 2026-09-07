// Module ID: 15477
// Function ID: 15478
// Name: UserSettingsSwipeRightToLeft
// Dependencies: [19, 7975, 21, 11473, 14692, 2]
// Exports: default

// Module 15477 (UserSettingsSwipeRightToLeft)
import _modDef14692 from "module_14692" /* 14692 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7975 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = React.useMemo(() => {
    const items = [constants.CHAT_GESTURES];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14692, { node });
};
