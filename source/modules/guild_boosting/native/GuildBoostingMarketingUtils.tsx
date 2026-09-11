// Module ID: 12620
// Function ID: 12621
// Name: GuildBoostingMarketingUtils
// Dependencies: [4500, 8848, 12621, 10470, 12623, 12625, 9462, 9843, 11792, 10324, 5148, 10203, 2]
// Exports: getIconForPerk

// Module 12620 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4500 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8848).ReactionIcon;
  } else if (tmp(4500).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12621).SoundboardIcon;
  } else if (tmp(4500).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10470).GifIcon;
  } else if (tmp(4500).PerkIcons.AUDIO === perkIcon) {
    return tmp(12623).HeadphonesIcon;
  } else if (tmp(4500).PerkIcons.STREAM === perkIcon) {
    return tmp(12625).ScreenArrowIcon;
  } else if (tmp(4500).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9462).UploadIcon;
  } else if (tmp(4500).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9843).ShieldUserIcon;
  } else if (tmp(4500).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11792).ImagesIcon;
  } else if (tmp(4500).PerkIcons.VANITY === perkIcon) {
    return tmp(10324).StarIcon;
  } else if (tmp(4500).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5148).StageIcon;
  } else if (tmp(4500).PerkIcons.STICKER === perkIcon) {
    return tmp(10203).StickerIcon;
  } else {
    return tmp(8848).ReactionIcon;
  }
};
