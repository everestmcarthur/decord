// Module ID: 12770
// Function ID: 12771
// Name: GuildBoostingMarketingUtils
// Dependencies: [4615, 8997, 12771, 10623, 12773, 12775, 9609, 9997, 11941, 10476, 5266, 10357, 2]
// Exports: getIconForPerk

// Module 12770 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4615 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8997).ReactionIcon;
  } else if (tmp(4615).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12771).SoundboardIcon;
  } else if (tmp(4615).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10623).GifIcon;
  } else if (tmp(4615).PerkIcons.AUDIO === perkIcon) {
    return tmp(12773).HeadphonesIcon;
  } else if (tmp(4615).PerkIcons.STREAM === perkIcon) {
    return tmp(12775).ScreenArrowIcon;
  } else if (tmp(4615).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9609).UploadIcon;
  } else if (tmp(4615).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9997).ShieldUserIcon;
  } else if (tmp(4615).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11941).ImagesIcon;
  } else if (tmp(4615).PerkIcons.VANITY === perkIcon) {
    return tmp(10476).StarIcon;
  } else if (tmp(4615).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5266).StageIcon;
  } else if (tmp(4615).PerkIcons.STICKER === perkIcon) {
    return tmp(10357).StickerIcon;
  } else {
    return tmp(8997).ReactionIcon;
  }
};
