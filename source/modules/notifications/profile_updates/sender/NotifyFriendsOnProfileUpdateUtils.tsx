// Module ID: 15915
// Function ID: 15916
// Name: onNotifyFriendsOnProfileUpdateSettingsChanged
// Dependencies: [4212, 1074, 1935, 1242, 2]
// Exports: onNotifyFriendsOnProfileUpdateSettingsChanged

// Module 15915 (onNotifyFriendsOnProfileUpdateSettingsChanged)
import set from "set" /* 2 */;
import ME from "ME" /* 1074 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 1242 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import AccountNotificationFlags from "AccountNotificationFlags" /* 4212 */;

let closure_3 = AccountNotificationFlags.NotificationSettingsUpdateType;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/notifications/profile_updates/sender/NotifyFriendsOnProfileUpdateUtils.tsx");

export const onNotifyFriendsOnProfileUpdateSettingsChanged = function onNotifyFriendsOnProfileUpdateSettingsChanged(notify_friends_on_profile_update) {
  const NotifyFriendsOnProfileUpdate = explicitContentFromProto.NotifyFriendsOnProfileUpdate;
  NotifyFriendsOnProfileUpdate.updateSetting(notify_friends_on_profile_update);
  let obj = expandEventPropertiesDefault;
  obj = { update_type: constants.ACCOUNT, notify_friends_on_profile_update };
  obj.track(AnalyticEvents.NOTIFICATION_SETTINGS_UPDATED, obj);
};
