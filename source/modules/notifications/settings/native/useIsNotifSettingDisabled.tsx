// Module ID: 15995
// Function ID: 15996
// Name: useIsNotifSettingDisabled
// Dependencies: [15986, 15988, 15987, 504, 1114, 2722, 2]
// Exports: default

// Module 15995 (useIsNotifSettingDisabled)
import _modDef2722 from "module_2722" /* 2722 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 15987 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 15988 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 15986 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/native/useIsNotifSettingDisabled.tsx");

export default function useIsNotifSettingDisabled(arg0) {
  _require = arg0;
  const items = [DeclarativeSystemNotifPermissionStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => DeclarativeSystemNotifPermissionStore.isDisabled(closure_0));
  let tmp4 = !stateFromStores;
  if (stateFromStores) {
    tmp4 = null == DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
  }
  let tmp7 = !tmp4;
  if (!tmp4) {
    const obj2 = { label: null, onPress: null };
    const intl = require("util").intl;
    obj2.label = intl.string(_modDef2722.TVZ0Fm);
    obj2.onPress = function handleOpenSystem() {
      const result = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsOpened(closure_0);
      const tmp = closure_0;
      const openSystemNotifSettings = DeclarativeSystemNotifPermissionHelpersDefault.openSystemNotifSettings;
      if (openSystemNotifSettings != null) {
        const result1 = openSystemNotifSettings(tmp);
      }
    };
    tmp7 = obj2;
  }
  return tmp7;
};
