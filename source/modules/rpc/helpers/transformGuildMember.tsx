// Module ID: 14645
// Function ID: 14646
// Name: transformGuildMember
// Dependencies: [1882, 2]
// Exports: default

// Module 14645 (transformGuildMember)
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1882 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/rpc/helpers/transformGuildMember.tsx");

export default function transformGuildMember(userId) {
  const obj = { user_id: userId.userId, nick: userId.nick, guild_id: userId.guildId, avatar: userId.avatar, avatar_decoration_data: AvatarDecorationUtils.parseAvatarDecorationData(avatarDecoration), banner, bio, pronouns, color_string: colorString };
  ({ avatarDecoration, banner, bio, pronouns, colorString } = userId);
  return obj;
};
