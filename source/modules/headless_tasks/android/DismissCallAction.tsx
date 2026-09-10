// Module ID: 17973
// Function ID: 17974
// Name: DismissCallAction
// Dependencies: [1074, 17968, 1242, 4754, 7196, 9214, 2]

// Module 17973 (DismissCallAction)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4754 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7196 */;
import CallActionCreatorsDefault from "CallActionCreators" /* 9214 */;
import HeadlessTaskUtilsDefault from "HeadlessTaskUtils" /* 17968 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/headless_tasks/android/DismissCallAction.tsx");

export default (arg0) => {
  closure_0 = arg0;
  return new Promise((arg0) => {
    closure_0 = arg0;
    HeadlessTaskUtilsDefault.awaitStorage(() => {
      if (closure_0.isFullscreenCallUI) {
        const obj2 = { action_type: "decline" };
        const obj = AnalyticsUtilsDefault;
        const merged = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(tmp.channelId));
        obj.track(AnalyticEvents.CALLKIT_CLICKED, obj2);
      }
      const obj4 = AnalyticsUtilsDefault;
      const obj5 = { location: AnalyticsLocationDefault.PUSH_NOTIFICATION, guild_id: closure_0.guildId, ringer_user_id: closure_0.userId };
      const merged1 = Object.assign(AppAnalyticsUtils.collectChannelAnalyticsMetadataFromId(tmp.channelId));
      obj4.track(AnalyticEvents.RING_CALL_DECLINED, obj5);
      CallActionCreatorsDefault.stopRinging(closure_0.channelId);
      closure_0(true);
    });
  });
};
