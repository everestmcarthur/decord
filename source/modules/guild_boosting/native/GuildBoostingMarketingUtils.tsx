// Module ID: 12670
// Function ID: 12671
// Name: GuildBoostingMarketingUtils
// Dependencies: [4531, 8897, 12671, 10521, 12673, 12675, 9514, 9892, 11841, 10374, 5182, 10252, 2]
// Exports: getIconForPerk

// Module 12670 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4531 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8897).ReactionIcon;
  } else if (tmp(4531).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12671).SoundboardIcon;
  } else if (tmp(4531).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10521).GifIcon;
  } else if (tmp(4531).PerkIcons.AUDIO === perkIcon) {
    return tmp(12673).HeadphonesIcon;
  } else if (tmp(4531).PerkIcons.STREAM === perkIcon) {
    return tmp(12675).ScreenArrowIcon;
  } else if (tmp(4531).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9514).UploadIcon;
  } else if (tmp(4531).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9892).ShieldUserIcon;
  } else if (tmp(4531).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11841).ImagesIcon;
  } else if (tmp(4531).PerkIcons.VANITY === perkIcon) {
    return tmp(10374).StarIcon;
  } else if (tmp(4531).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5182).StageIcon;
  } else if (tmp(4531).PerkIcons.STICKER === perkIcon) {
    return tmp(10252).StickerIcon;
  } else {
    return tmp(8897).ReactionIcon;
  }
};
