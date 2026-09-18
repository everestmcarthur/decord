// Module ID: 16591
// Function ID: 16592
// Name: VibegrationsPlatformUtils
// Dependencies: [1895, 13720, 9693, 2]

// Module 16591 (VibegrationsPlatformUtils)
import PushNotificationDefault from "PushNotification" /* 9693 */;
import AppStateStore from "AppStateStore" /* 1895 */;

const LocalNotificationTypes = fn(13720).LocalNotificationTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx");

export default {
  openVibegrationsAppInstallModal() {
    return Promise.resolve();
  },
  isWindowFocused() {
    return "active" === AppStateStore.getState();
  },
  areTurnNotificationsDisabled() {
    return false;
  },
  presentTurnNotification(arg0) {
    ({ projectId, guildId } = arg0);
    ({ title, body } = arg0);
    const obj2 = { category: "local", alertTitle: title, alertBody: body, userInfo: null };
    if (null != guildId) {
      const obj4 = { guildId };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    obj2.userInfo = { type: LocalNotificationTypes.VIBEGRATIONS, projectId, channel_id: projectId };
    const result = PushNotificationDefault.presentLocalNotification(obj2);
  },
  relayPreviewCapture() {
    return Promise.resolve({ status: "unavailable" });
  },
  relayPreviewControl() {
    return Promise.resolve({ status: "unavailable" });
  },
  releasePreviewControl() {

  },
  beginPreviewOperation() {

  },
  endPreviewOperation() {

  }
};
