// Module ID: 12624
// Function ID: 12625
// Name: confirmCancelFriendRequest
// Dependencies: [19, 21, 4906, 12625, 12626, 12627, 12628, 12629, 12630, 2]
// Exports: alertUserReported, confirmCancelFriendRequest, confirmRemoveFriend, confirmRemoveGameFriend, confirmThreadRemove, confirmVideoUnstableConnection

// Module 12624 (confirmCancelFriendRequest)
import noopAll from "noop" /* 19 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import UserProfileConfirmCancelFriendRequestDefault from "UserProfileConfirmCancelFriendRequest" /* 12625 */;
import UserProfileConfirmRemoveFriendDefault from "UserProfileConfirmRemoveFriend" /* 12626 */;
import UserProfileConfirmRemoveGameFriendDefault from "UserProfileConfirmRemoveGameFriend" /* 12627 */;
import UserProfileConfirmVideoUnstableConnectionDefault from "UserProfileConfirmVideoUnstableConnection" /* 12628 */;
import UserProfileAlertUserReportedDefault from "UserProfileAlertUserReported" /* 12629 */;
import UserProfileConfirmThreadRemoveDefault from "UserProfileConfirmThreadRemove" /* 12630 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileAlertUtils.tsx");

export const confirmCancelFriendRequest = function confirmCancelFriendRequest(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("cancel-friend-request", jsx(UserProfileConfirmCancelFriendRequestDefault, {}));
};
export const confirmRemoveFriend = function confirmRemoveFriend(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-friend", jsx(UserProfileConfirmRemoveFriendDefault, {}));
};
export const confirmRemoveGameFriend = function confirmRemoveGameFriend(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("remove-game-friend", jsx(UserProfileConfirmRemoveGameFriendDefault, {}));
};
export const confirmVideoUnstableConnection = function confirmVideoUnstableConnection(onConfirm) {
  let obj = useAlertStore;
  obj = { onConfirm };
  obj.openAlert("video-unstable-connection", jsx(UserProfileConfirmVideoUnstableConnectionDefault, { onConfirm }));
};
export const alertUserReported = function alertUserReported() {
  useAlertStore.openAlert("user-reported", jsx(UserProfileAlertUserReportedDefault, {}));
};
export const confirmThreadRemove = function confirmThreadRemove(arg0) {
  let obj = useAlertStore;
  obj = {};
  const merged = Object.assign(arg0);
  obj.openAlert("thread-remove", jsx(UserProfileConfirmThreadRemoveDefault, {}));
};
