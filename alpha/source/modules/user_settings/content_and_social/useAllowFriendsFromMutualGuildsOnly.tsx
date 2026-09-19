// Module ID: 16197
// Function ID: 16198
// Name: useAllowFriendsFromMutualGuildsOnly
// Dependencies: [19, 2019, 7235, 2]
// Exports: useAllowFriendsFromMutualGuildsOnly

// Module 16197 (useAllowFriendsFromMutualGuildsOnly)
import UserSettingsUtils from "UserSettingsUtils" /* 7235 */;
import noop from "module_19" /* 19 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/useAllowFriendsFromMutualGuildsOnly.tsx");

export const useAllowFriendsFromMutualGuildsOnly = function useAllowFriendsFromMutualGuildsOnly() {
  const FriendSourceFlagsSetting = setting(2019).FriendSourceFlagsSetting;
  setting = FriendSourceFlagsSetting.useSetting();
  const items = [setting];
  const memo = noop.useMemo(() => UserSettingsUtils.computeFlags(setting), items);
  return memo.mutualGuilds && !memo.all;
};
