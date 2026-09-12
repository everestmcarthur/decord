// Module ID: 16015
// Function ID: 16016
// Name: RedesignSettingsCategoryServerScreen
// Dependencies: [19, 21, 11601, 16008, 14775, 2]

// Module 16015 (RedesignSettingsCategoryServerScreen)
import SettingBuilders from "SettingBuilders" /* 11601 */;
import SettingLayoutDefault from "SettingLayout" /* 14775 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16008 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategoryServerScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildCategoryServerSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
