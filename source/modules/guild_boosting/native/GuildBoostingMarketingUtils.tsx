// Module ID: 12657
// Function ID: 12658
// Name: GuildBoostingMarketingUtils
// Dependencies: [4530, 8883, 12658, 10510, 12660, 12662, 9501, 9882, 11829, 10364, 5178, 10242, 2]
// Exports: getIconForPerk

// Module 12657 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4530 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8883).ReactionIcon;
  } else if (tmp(4530).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12658).SoundboardIcon;
  } else if (tmp(4530).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10510).GifIcon;
  } else if (tmp(4530).PerkIcons.AUDIO === perkIcon) {
    return tmp(12660).HeadphonesIcon;
  } else if (tmp(4530).PerkIcons.STREAM === perkIcon) {
    return tmp(12662).ScreenArrowIcon;
  } else if (tmp(4530).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9501).UploadIcon;
  } else if (tmp(4530).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9882).ShieldUserIcon;
  } else if (tmp(4530).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11829).ImagesIcon;
  } else if (tmp(4530).PerkIcons.VANITY === perkIcon) {
    return tmp(10364).StarIcon;
  } else if (tmp(4530).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5178).StageIcon;
  } else if (tmp(4530).PerkIcons.STICKER === perkIcon) {
    return tmp(10242).StickerIcon;
  } else {
    return tmp(8883).ReactionIcon;
  }
};
