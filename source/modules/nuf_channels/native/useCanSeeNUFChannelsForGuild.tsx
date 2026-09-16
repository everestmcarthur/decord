// Module ID: 16380
// Function ID: 16381
// Name: useCanSeeNUFChannelsForGuild
// Dependencies: [2022, 1980, 1372, 1074, 4263, 504, 4482, 1385, 2]
// Exports: useCanSeeNUFChannelsForGuild

// Module 16380 (useCanSeeNUFChannelsForGuild)
import UserUtils from "UserUtils" /* 4482 */;
import GuildMemberStore from "GuildMemberStore" /* 2022 */;
import GuildStore from "GuildStore" /* 1980 */;
import UserStore from "UserStore" /* 1372 */;

const require = globalThis.__r;

require = fn;
const GuildFeatures = fn(1074).GuildFeatures;
const GuildMemberFlags = fn(4263).GuildMemberFlags;
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf_channels/native/useCanSeeNUFChannelsForGuild.tsx");

export const useCanSeeNUFChannelsForGuild = function useCanSeeNUFChannelsForGuild(id) {
  _require = id;
  const items = [UserStore, GuildStore, GuildMemberStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(items, () => {
    const currentUser = UserStore.getCurrentUser();
    if (null != currentUser) {
      if (obj3.isNewUser(currentUser)) {
        const guild = GuildStore.getGuild(closure_0);
        if (null != guild) {
          const features2 = guild.features;
          if (!features2.has(GuildFeatures.HUB)) {
            const selfMember = GuildMemberStore.getSelfMember(closure_0);
            const features = guild.features;
            let hasFlagResult = features.has(tmp12.GUILD_ONBOARDING) && null != selfMember;
            if (hasFlagResult) {
              let num = selfMember.flags;
              if (num == null) {
                num = 0;
              }
              hasFlagResult = tmp10(1385).hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
              const tmp10Result = tmp10(1385);
            }
            if (hasFlagResult) {
              let num2 = selfMember.flags;
              if (num2 == null) {
                num2 = 0;
              }
              hasFlagResult = !tmp10(1385).hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
              const tmp10Result2 = tmp10(1385);
            }
            return !hasFlagResult;
          }
          tmp12 = GuildFeatures;
        }
        return false;
      }
      obj3 = UserUtils;
    }
    return false;
  }, items1);
};
