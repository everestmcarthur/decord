// Module ID: 16054
// Function ID: 16055
// Name: useIsNotifSettingDisabled
// Dependencies: [16045, 16047, 16046, 504, 1115, 2723, 2]
// Exports: default

// Module 16054 (useIsNotifSettingDisabled)
import _modDef2723 from "module_2723" /* 2723 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 16046 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 16047 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 16045 */;

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
    obj2.label = intl.string(_modDef2723.TVZ0Fm);
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
