// Module ID: 18235
// Function ID: 18236
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1095, 5289, 5309, 5307, 5297, 5296, 5304, 2]
// Exports: getPrivateChannelIconComponent

// Module 18235 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1095 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5289).TextLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5309).VoiceLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5307).StageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5297).ForumLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5296).ImageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5304).AnnouncementsLockIcon;
  } else {
    return tmp(5289).TextLockIcon;
  }
};
