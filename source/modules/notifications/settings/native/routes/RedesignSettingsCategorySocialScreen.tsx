// Module ID: 16071
// Function ID: 16072
// Name: RedesignSettingsCategorySocialScreen
// Dependencies: [19, 21, 11622, 16065, 14810, 2]

// Module 16071 (RedesignSettingsCategorySocialScreen)
import SettingBuilders from "SettingBuilders" /* 11622 */;
import SettingLayoutDefault from "SettingLayout" /* 14810 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16065 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/native/routes/RedesignSettingsCategorySocialScreen.tsx");

export default noop.memo(() => {
  const node = noop.useMemo(() => {
    const obj2 = { sections: null };
    const obj = SettingBuilders;
    const items = [MobileNotifSettingsRouteBuilders.buildCategorySocialSettingsSection()];
    obj2.sections = items;
    return obj.createList(obj2);
  }, []);
  return jsx(SettingLayoutDefault, { node });
});
