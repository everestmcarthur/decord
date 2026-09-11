// Module ID: 15992
// Function ID: 15993
// Name: RedesignSettingsCategoryOtherScreen
// Dependencies: [19, 21, 11564, 15984, 14744, 2]

// Module 15992 (RedesignSettingsCategoryOtherScreen)
import SettingBuilders from "SettingBuilders" /* 11564 */;
import SettingLayoutDefault from "SettingLayout" /* 14744 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15984 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryOtherScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildCategoryOtherSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
