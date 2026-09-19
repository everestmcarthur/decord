// Module ID: 16244
// Function ID: 16245
// Name: RedesignSettingsCategorySocialScreen
// Dependencies: [19, 21, 11723, 16238, 14958, 2]

// Module 16244 (RedesignSettingsCategorySocialScreen)
import SettingBuilders from "SettingBuilders" /* 11723 */;
import SettingLayoutDefault from "SettingLayout" /* 14958 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 16238 */;
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
