// Module ID: 13742
// Function ID: 13743
// Name: LocalPushNotificationStore
// Dependencies: [1979, 5427, 13743, 1074, 9719, 4166, 1114, 504, 573, 2]

// Module 13742 (LocalPushNotificationStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import util from "util" /* 1114 */;
import _modDef4166 from "module_4166" /* 4166 */;
import PushNotificationDefault from "PushNotification" /* 9719 */;
import GuildStore from "GuildStore" /* 1979 */;
import GuildVerificationStore from "GuildVerificationStore" /* 5427 */;

require = fn;
const Constants = fn(13743);
({ LocalNotificationTypes: hasOwnProperty, FIRE_DATE_FORMAT: metroRequire } = Constants);
const VerificationLevels = fn(1074).VerificationLevels;
const set = new Set();
const Store = initializeDefault.Store;
class LocalPushNotificationStore extends Store {
}
const prototype = LocalPushNotificationStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(GuildStore, GuildVerificationStore);
};
prototype["isScheduled"] = function isScheduled(arg0) {
  return set.has(arg0);
};
LocalPushNotificationStore.displayName = "LocalPushNotificationStore";
const localPushNotificationStore = new LocalPushNotificationStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleCheckScheduledNotifs() {
    const scheduledLocalNotifications = PushNotificationDefault.getScheduledLocalNotifications((arr) => {
      const found = arr.filter((userInfo) => {
        let tmp = null != userInfo.userInfo;
        if (tmp) {
          tmp = userInfo.userInfo.type === constants.GUILD_VERIFICATION;
        }
        return tmp;
      });
      const item = found.forEach((userInfo) => {
        userInfo = userInfo.userInfo;
        const guildId = userInfo.guildId;
        if (null != guild.getGuild(guildId)) {
          if (!closure_1_4.canChatInGuild(guildId)) {
            set.add(userInfo);
          }
        }
        const result = closure_1_1(9719).cancelLocalNotifications(userInfo);
        const obj = closure_1_1(9719);
        const result1 = closure_1_1(9719).cancelLocalNotifications(userInfo);
        set.delete(userInfo);
      });
    });
  },
  GUILD_CREATE: function handleGuildVerificationChecked(guild) {
    const id = guild.guild.id;
    guild = GuildStore.getGuild(id);
    if (null == guild) {
      return false;
    } else {
      const check = GuildVerificationStore.getCheck(id);
      if (!check.canChat) {
        if (guild.verificationLevel === VerificationLevels.MEDIUM) {
          const verificationLevel = guild.verificationLevel;
          if (tmp2.MEDIUM === verificationLevel) {
            let obj = _modDef4166(check.accountDeadline);
          } else if (tmp2.HIGH === verificationLevel) {
            obj = _modDef4166(check.memberDeadline);
          }
          if (null != obj) {
            if (!obj.isSameOrBefore(_modDef4166(), "minute")) {
              const obj2 = { type: constants.GUILD_VERIFICATION, guildId: guild.id };
              set.add(obj2);
              const obj3 = { userInfo: obj2, fireDate: obj.format(timestampProducer), alertTitle: guild.name, alertBody: null, category: "local" };
              const intl = util.intl;
              obj3.alertBody = intl.string(util.t["hrDBa+"]);
              const result = tmp15(9719).scheduleLocalNotification(obj3);
              const tmp15Result = tmp15(9719);
            }
            tmp15 = importDefault;
          }
        }
      }
    }
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    const obj = { type: constants.GUILD_VERIFICATION, guildId: guild.guild.id };
    if (set.has(obj)) {
      const result = PushNotificationDefault.cancelLocalNotifications(obj);
      set.delete(obj);
    }
  },
  LOGOUT: function handleCancelAll() {
    set.clear();
    const result = PushNotificationDefault.cancelAllLocalNotifications();
  }
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/local_push_notification/native/LocalPushNotificationStore.tsx");

export default localPushNotificationStore;
