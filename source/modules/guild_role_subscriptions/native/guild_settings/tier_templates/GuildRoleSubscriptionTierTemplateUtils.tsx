// Module ID: 17873
// Function ID: 17874
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1094, 5129, 5149, 5147, 5137, 5136, 5144, 2]
// Exports: getPrivateChannelIconComponent

// Module 17873 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5129).TextLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5149).VoiceLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5147).StageLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5137).ForumLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5136).ImageLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5144).AnnouncementsLockIcon;
  } else {
    return tmp(5129).TextLockIcon;
  }
};
