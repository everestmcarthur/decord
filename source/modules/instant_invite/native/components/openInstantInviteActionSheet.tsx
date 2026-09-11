// Module ID: 9920
// Function ID: 9921
// Name: openInstantInviteActionSheet
// Dependencies: [4574, 9921, 1896, 1250, 2]
// Exports: default

// Module 9920 (openInstantInviteActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const discord_common_AnalyticsUtils = tmp2(1250);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/openInstantInviteActionSheet.tsx");

export default function openInstantInviteActionSheet(invite_channel_id) {
  const obj = ActionSheetActionCreatorsDefault;
  let id = invite_channel_id.vanityURLCode;
  if (id == null) {
    id = invite_channel_id.channel.id;
  }
  const combined = "InstantInviteActionSheet-" + id;
  const obj2 = {};
  const merged = Object.assign(invite_channel_id);
  obj2.impressionName = discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE;
  obj2.impressionProperties = { invite_channel_id: invite_channel_id.channel.id, invite_guild_id: invite_channel_id.channel.guild_id };
  obj.openLazy(asyncRequireImpl(9921, dependencyMap.paths), combined, obj2, invite_channel_id.stackingBehavior);
};
