// Module ID: 17998
// Function ID: 17999
// Name: GuildRoleSubscriptionTierTemplateUtils
// Dependencies: [1095, 5163, 5183, 5181, 5171, 5170, 5178, 2]
// Exports: getPrivateChannelIconComponent

// Module 17998 (GuildRoleSubscriptionTierTemplateUtils)
import ChannelTypes from "ChannelTypes" /* 1095 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateUtils.tsx");

export const getPrivateChannelIconComponent = function getPrivateChannelIconComponent(type) {
  if (ChannelTypes.ChannelTypes.GUILD_TEXT === type) {
    return tmp(5163).TextLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_VOICE === type) {
    return tmp(5183).VoiceLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_STAGE_VOICE === type) {
    return tmp(5181).StageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_FORUM === type) {
    return tmp(5171).ForumLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_MEDIA === type) {
    return tmp(5170).ImageLockIcon;
  } else if (tmp(1095).ChannelTypes.GUILD_ANNOUNCEMENT === type) {
    return tmp(5178).AnnouncementsLockIcon;
  } else {
    return tmp(5163).TextLockIcon;
  }
};
