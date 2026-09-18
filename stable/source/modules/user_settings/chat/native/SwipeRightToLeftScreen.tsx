// Module ID: 15477
// Function ID: 15478
// Name: SwipeRightToLeftScreen
// Dependencies: [19, 7976, 21, 11473, 14692, 2]
// Exports: default

// Module 15477 (SwipeRightToLeftScreen)
import SettingBuilders from "SettingBuilders" /* 11473 */;
import SettingLayoutDefault from "SettingLayout" /* 14692 */;
import noop from "module_19" /* 19 */;

require = fn;
const MobileUserSettings = fn(7976).MobileUserSettings;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/chat/native/SwipeRightToLeftScreen.tsx");

export default function UserSettingsSwipeRightToLeft() {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj3 = { settings: null };
    const items = [constants.CHAT_GESTURES];
    obj3.settings = items;
    const items1 = [obj3];
    obj2.sections = items1;
    return SettingBuilders.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
};
