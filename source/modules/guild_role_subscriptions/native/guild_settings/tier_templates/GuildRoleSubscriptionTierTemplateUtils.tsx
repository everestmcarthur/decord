// Module ID: 17823
// Function ID: 17824
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1094, 5092, 5112, 5110, 5100, 5099, 5107, 2]
// Exports: getPrivateChannelIconComponent

// Module 17823 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5092).TextLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5112).VoiceLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5110).StageLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5100).ForumLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5099).ImageLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5107).AnnouncementsLockIcon;
  } else {
    return tmp(5092).TextLockIcon;
  }
};
