// Module ID: 17508
// Function ID: 17509
// Name: RelationshipUtils
// Dependencies: [1074, 15548, 1396, 1114, 17509, 4587, 2]
// Exports: showAcceptedNotification, showPendingNotification

// Module 17508 (RelationshipUtils)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1396 */;
import ChannelActionCreatorsDefault from "ChannelActionCreators" /* 4587 */;
import NotificationActionCreatorsDefault from "NotificationActionCreators" /* 15548 */;
import FriendsActionCreatorsDefault from "FriendsActionCreators" /* 17509 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const FriendsSections = Constants.FriendsSections;
const result = size.fileFinishedImporting("utils/RelationshipUtils.tsx");

export const showPendingNotification = function showPendingNotification(user) {
  const intl = util.intl;
  const stringResult = intl.string(util.t["t3+Af3"]);
  const obj = NotificationActionCreatorsDefault;
  obj.showNotification(AvatarUtilsDefault.getUserAvatarURL(user), user.username, stringResult, {}, {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      FriendsActionCreatorsDefault.transitionToSection(constants.PENDING, { explicit: true });
    },
    isUserAvatar: true
  });
};
export const showAcceptedNotification = function showAcceptedNotification(user) {
  _require = user;
  const intl = require("util").intl;
  const stringResult = intl.string(require("util").t.MYr3Ka);
  const obj = NotificationActionCreatorsDefault;
  obj.showNotification(AvatarUtilsDefault.getUserAvatarURL(user), user.username, stringResult, {}, {
    omitViewTracking: true,
    omitClickTracking: true,
    tag: user.id,
    onClick: () => {
      ChannelActionCreatorsDefault.openPrivateChannel({ recipientIds: user.id });
    },
    isUserAvatar: true
  });
};
