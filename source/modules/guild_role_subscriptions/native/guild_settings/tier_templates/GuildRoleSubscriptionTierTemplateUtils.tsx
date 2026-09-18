// Module ID: 18156
// Function ID: 18157
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1095, 5247, 5267, 5265, 5255, 5254, 5262, 2]
// Exports: getPrivateChannelIconComponent

// Module 18156 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1095 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5247).TextLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5267).VoiceLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5265).StageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5255).ForumLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5254).ImageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5262).AnnouncementsLockIcon;
  } else {
    return tmp(5247).TextLockIcon;
  }
};
