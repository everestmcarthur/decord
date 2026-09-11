// Module ID: 12716
// Function ID: 12717
// Name: UserProfileConfirmRemoveGameFriend
// Dependencies: [19, 21, 8276, 10959, 4956, 1114, 4956, 2]
// Exports: default

// Module 12716 (UserProfileConfirmRemoveGameFriend)
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8276 */;
import PeopleUtilsDefault from "PeopleUtils" /* 10959 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileConfirmRemoveGameFriend.tsx");

export default function UserProfileConfirmRemoveGameFriend(gameName) {
  ({ userDisplayName, userId } = gameName);
  const applicationId = gameName.applicationId;
  const items = [applicationId, userId];
  const callback = noop.useCallback(() => {
    const result = UserProfileAnalyticsUtils.trackUserProfileAction({ action: "REMOVE_GAME_FRIEND" });
    PeopleUtilsDefault.removeFriend({ userId, applicationId, location: "UserProfileConfirmRemoveGameFriend" });
  }, items);
  let obj = { title: null, content: null, actions: null };
  const intl = userId(1114).intl;
  obj.title = intl.formatToPlainString(userId(1114).t.fBKKfq, { name: userDisplayName });
  const intl2 = userId(1114).intl;
  obj.content = intl2.formatToPlainString(userId(1114).t.dsU5bl, { name: userDisplayName, gameName: gameName.gameName });
  const obj2 = { children: null };
  const obj3 = { variant: "destructive", text: null, onPress: null };
  const intl3 = userId(1114).intl;
  obj3.text = intl3.string(userId(1114).t.RLcE6x);
  obj3.onPress = callback;
  const items1 = [closure_4(userId(4956).AlertActionButton, obj3, "confirm-remove"), ];
  const obj4 = { variant: "secondary", text: null };
  const intl4 = userId(1114).intl;
  obj4.text = intl4.string(userId(1114).t["eN6+rI"]);
  items1[1] = closure_4(userId(4956).AlertActionButton, obj4, "nevermind");
  obj2.children = items1;
  obj.actions = closure_5(userId(4956).AlertActions, obj2);
  return closure_4(userId(4956).AlertModal, obj);
};
