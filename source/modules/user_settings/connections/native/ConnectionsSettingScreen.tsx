// Module ID: 15011
// Function ID: 15012
// Name: ConnectionsSettingScreen
// Dependencies: [19, 21, 4574, 15012, 1896, 1483, 7068, 7937, 1114, 15013, 2]

// Module 15011 (ConnectionsSettingScreen)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import noop from "module_19" /* 19 */;

require = fn;
function onPress() {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15012, dependencyMap.paths), "AddConnection");
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/ConnectionsSettingScreen.tsx");

export default noop.memo(function ConnectionsSettingScreen() {
  stackNavigation = stackNavigation(1483).useStackNavigation();
  let obj = stackNavigation(1483);
  const tmp = stackNavigation;
  const params = stackNavigation(7068).useSettingNavigationRoute().params;
  let selectedPlatformType;
  if (params != null) {
    selectedPlatformType = params.selectedPlatformType;
  }
  const items = [stackNavigation];
  const layoutEffect = noop.useLayoutEffect(() => {
    stackNavigation.setOptions({
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        obj.onPress = onPress;
        const intl = stackNavigation(1114).intl;
        obj.label = intl.string(stackNavigation(1114).t.OYkgVk);
        return closure_1_4(stackNavigation(7937).HeaderTextButton, obj);
      }
    });
  }, items);
  return jsx(tmp(15013).UserSettingsConnections, { selectedPlatformType });
});
