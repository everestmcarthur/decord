// Module ID: 13056
// Function ID: 13057
// Name: UserProfileActivityVoiceChannelUsers
// Dependencies: [19, 4614, 21, 8243, 504, 5619, 4726, 1178, 11183, 1114, 2]
// Exports: default

// Module 13056 (UserProfileActivityVoiceChannelUsers)
import util from "util" /* 1114 */;
import NicknameUtilsDefault from "NicknameUtils" /* 4726 */;
import UserProfileStackedActionSheet from "UserProfileStackedActionSheet" /* 11183 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4614 */;

const UserProfileStackedActionSheetDefault = UserProfileStackedActionSheet;

require = fn;
function UserRow(user) {
  user = user.user;
  const channel = user.channel;
  ({ onPress, start, end } = user);
  const avatarDecoration = user(8243).useAvatarDecoration(user, channel.guild_id);
  const obj = user(8243);
  const items = [PresenceStore];
  const stateFromStoresObject = user(504).useStateFromStoresObject(items, () => ({ status: PresenceStore.getStatus(user.id), isMobileOnline: PresenceStore.isMobileOnline(user.id), isVROnline: PresenceStore.isVROnline(user.id) }));
  ({ status, isMobileOnline, isVROnline } = stateFromStoresObject);
  const obj3 = { onPress, label: null, icon: null, start: null, end: null };
  const obj2 = user(504);
  obj3.label = NicknameUtilsDefault.getName(channel.guild_id, channel.id, user);
  obj3.icon = jsx(user(1178).Avatar, { user, avatarDecoration, size: user(1178).AvatarSizes.REFRESH_MEDIUM_32, guildId: channel.guild_id, status, isMobileOnline, isVROnline, autoStatusCutout: true });
  obj3.start = start;
  obj3.end = end;
  return jsx(user(5619).TableRow, { onPress, label: null, icon: null, start: null, end: null });
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannelUsers.tsx");

export default function UserProfileActivityVoiceChannelUsers(arg0) {
  ({ channel: require, onPressUser: importDefault } = arg0);
  ({ users, onBack } = arg0);
  const obj = { title: null, onBack: null, scrollable: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["3xHUJ+"]);
  obj.onBack = onBack;
  obj.children = jsx(UserProfileStackedActionSheet.UserProfileStackedActionSheetList, {
    data: users,
    keyExtractor(id) {
      return id.id;
    },
    renderItem(start) {
      const item = start.item;
      return <UserRow key={item.id} user={item} channel={item} onPress={function onPress() {
        return importDefault(item.id);
      }} start={arg0.start} end={arg0.end} />;
    }
  });
  return jsx(UserProfileStackedActionSheetDefault, { title: null, onBack: null, scrollable: true, children: null });
};
