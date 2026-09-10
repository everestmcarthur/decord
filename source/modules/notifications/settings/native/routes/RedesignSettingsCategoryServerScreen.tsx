// Module ID: 15954
// Function ID: 15955
// Name: RedesignSettingsCategoryServerScreen
// Dependencies: [19, 21, 11500, 15951, 14718, 2]

// Module 15954 (RedesignSettingsCategoryServerScreen)
import SettingBuilders from "SettingBuilders" /* 11500 */;
import SettingLayoutDefault from "SettingLayout" /* 14718 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15951 */;
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
