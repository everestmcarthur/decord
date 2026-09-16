// Module ID: 16044
// Function ID: 16045
// Name: DeclarativeSystemNotifPermissionActionCreators
// Dependencies: [16045, 16046, 573, 16047, 2]
// Exports: refreshSystemNotifPermissionsAsync

// Module 16044 (DeclarativeSystemNotifPermissionActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import DeclarativeSystemNotifPermissionHelpersDefault from "DeclarativeSystemNotifPermissionHelpers" /* 16046 */;
import DeclarativeSystemNotifPermissionAnalytics from "DeclarativeSystemNotifPermissionAnalytics" /* 16047 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 16045 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/DeclarativeSystemNotifPermissionActionCreators.tsx");

export const refreshSystemNotifPermissionsAsync = function refreshSystemNotifPermissionsAsync(app_state_active) {
  const result = DeclarativeSystemNotifPermissionHelpersDefault.refreshSystemNotifPermissions();
  if (null != result) {
    const disabledSettings = DeclarativeSystemNotifPermissionStore.getDisabledSettings();
    DispatcherDefault.dispatch(result);
    const tmpResult = DispatcherDefault;
    const result1 = DeclarativeSystemNotifPermissionAnalytics.trackSystemNotifSettingsReenabled(disabledSettings, result.disabledSettings, app_state_active);
  }
};
