// Module ID: 17874
// Function ID: 17875
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1094, 5130, 5150, 5148, 5138, 5137, 5145, 2]
// Exports: getPrivateChannelIconComponent

// Module 17874 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5130).TextLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5150).VoiceLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5148).StageLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5138).ForumLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5137).ImageLockIcon;
  } else if (tmp(1094).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5145).AnnouncementsLockIcon;
  } else {
    return tmp(5130).TextLockIcon;
  }
};
