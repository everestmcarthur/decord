// Module ID: 18017
// Function ID: 18018
// Name: MuteAction
// Dependencies: [1084, 18015, 4198, 7193, 7188, 2]

// Module 18017 (MuteAction)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import _modDef4198 from "module_4198" /* 4198 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7188 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7193 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 18015 */;
import size from "module_2" /* 2 */;

const MuteUntilSeconds = UserSettingsConstants.MuteUntilSeconds;
let result = size.fileFinishedImporting("modules/headless_tasks/android/MuteAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      let toISOStringResult = null;
      if (-1 !== closure_0.muteTime) {
        let HOURS_1 = tmp.muteTime;
        if (HOURS_1 == null) {
          HOURS_1 = MuteUntilSeconds.HOURS_1;
        }
        const obj = _modDef4198();
        toISOStringResult = _modDef4198().add(HOURS_1, "second").toISOString();
        const addResult = _modDef4198().add(HOURS_1, "second");
      }
      const obj2 = { muted: true, mute_config: { selected_time_window: MuteUntilSeconds.HOURS_1, end_time: toISOStringResult } };
      const result = NotificationSettingsModalActionCreatorsDefault.updateChannelOverrideSettings(tmp.guildId, tmp.channelId, obj2, NotificationSettingsUtils.NotificationLabels.Muted);
      closure_0(true);
    });
  });
};
