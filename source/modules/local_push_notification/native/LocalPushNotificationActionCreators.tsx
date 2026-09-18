// Module ID: 18267
// Function ID: 18268
// Name: LocalPushNotificationActionCreators
// Dependencies: [13925, 1074, 1965, 7671, 573, 1231, 1241, 5690, 9784, 1897, 4733, 4652, 1101, 2]
// Exports: receiveLocalNotification

// Module 18267 (LocalPushNotificationActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import SentryUtilsDefault from "SentryUtils" /* 1231 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ChannelConstants from "ChannelConstants" /* 1965 */;
import Constants2 from "Constants" /* 13925 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const GuildActionCreatorsDefault = tmp(5690);
const LocalNotificationTypes = Constants2.LocalNotificationTypes;
({ AnalyticEvents: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationActionCreators.tsx");

export const receiveLocalNotification = function receiveLocalNotification(getData) {
  if (null != getData.getData) {
    data(7671).trackAppOpened("notification");
    data = getData.getData();
    let type = data.type;
    function dispatch() {
      DispatcherDefault.dispatch({ type: "PUSH_NOTIFICATION_CLICK" });
      const obj3 = { message: "Notification Clicked", data: { type: data.type } };
      SentryUtilsDefault.addBreadcrumb(obj3);
      const obj4 = { type: data.type };
      const obj6 = { notif_type: data.type, guild_id: null };
      let guildId = null;
      if ("guildId" in data) {
        guildId = tmp4.guildId;
      }
      obj6.guild_id = guildId;
      AnalyticsUtilsDefault.track(constants2.NOTIFICATION_CLICKED, obj6);
      const type = tmp4.type;
      if (constants.GUILD_VERIFICATION === type) {
        const result = GuildActionCreatorsDefault.transitionToGuildSync(tmp4.guildId);
        const tmpResult = GuildActionCreatorsDefault;
      } else if (tmp8.CALL_RING === type) {
        data(1897)(9784, tmp2.paths).then((result) => result.default(channelId.channelId));
        const promise2 = data(1897)(9784, tmp2.paths);
      } else if (tmp8.MESSAGE_SEND_FAILED === type) {
        data(1897)(4733, tmp2.paths).then((transitionToMessage) => {
          ({ channelId, messageId } = closure_1_0);
          return transitionToMessage.transitionToMessage(channelId, messageId, { jumpType: data(4652).JumpType.INSTANT });
        });
        const promise = data(1897)(4733, tmp2.paths);
      } else if (tmp8.VIBEGRATIONS === type) {
        if (null != tmp4.guildId) {
          ({ guildId: data, projectId: closure_1 } = tmp4);
          data(1897)(1101, tmp2.paths).then((transitionTo) => transitionTo.transitionTo(hasOwnProperty.CHANNEL(channelId, StaticChannelRoute.VIBEGRATIONS, closure_1_1)));
          const promise3 = data(1897)(1101, tmp2.paths);
        }
      }
    }
    let obj2 = data(7671);
    if (obj.isDispatching()) {
      const _setImmediate = setImmediate;
      setImmediate(dispatch);
    } else {
      dispatch();
    }
    obj = DispatcherDefault;
  }
};
