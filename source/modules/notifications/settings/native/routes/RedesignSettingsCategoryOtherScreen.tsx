// Module ID: 16031
// Function ID: 16032
// Name: RedesignSettingsCategoryOtherScreen
// Dependencies: [19, 21, 11606, 16023, 14786, 2]

// Module 16031 (RedesignSettingsCategoryOtherScreen)
import SettingBuilders from "SettingBuilders" /* 11606 */;
import SettingLayoutDefault from "SettingLayout" /* 14786 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16023 */;
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
