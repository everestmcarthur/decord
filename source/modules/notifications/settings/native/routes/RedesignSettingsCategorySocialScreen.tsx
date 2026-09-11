// Module ID: 15990
// Function ID: 15991
// Name: RedesignSettingsCategorySocialScreen
// Dependencies: [19, 21, 11564, 15984, 14744, 2]

// Module 15990 (RedesignSettingsCategorySocialScreen)
import SettingBuilders from "SettingBuilders" /* 11564 */;
import SettingLayoutDefault from "SettingLayout" /* 14744 */;
import MobileNotifSettingsRouteBuilders from "MobileNotifSettingsRouteBuilders" /* 15984 */;
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
