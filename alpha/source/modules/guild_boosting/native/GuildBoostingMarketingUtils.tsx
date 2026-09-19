// Module ID: 12779
// Function ID: 12780
// Name: GuildBoostingMarketingUtils
// Dependencies: [4649, 9036, 12780, 10639, 12782, 12784, 9484, 9839, 11950, 10492, 5308, 10369, 2]
// Exports: getIconForPerk

// Module 12779 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4649 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(9036).ReactionIcon;
  } else if (tmp(4649).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12780).SoundboardIcon;
  } else if (tmp(4649).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10639).GifIcon;
  } else if (tmp(4649).PerkIcons.AUDIO === perkIcon) {
    return tmp(12782).HeadphonesIcon;
  } else if (tmp(4649).PerkIcons.STREAM === perkIcon) {
    return tmp(12784).ScreenArrowIcon;
  } else if (tmp(4649).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9484).UploadIcon;
  } else if (tmp(4649).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9839).ShieldUserIcon;
  } else if (tmp(4649).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11950).ImagesIcon;
  } else if (tmp(4649).PerkIcons.VANITY === perkIcon) {
    return tmp(10492).StarIcon;
  } else if (tmp(4649).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5308).StageIcon;
  } else if (tmp(4649).PerkIcons.STICKER === perkIcon) {
    return tmp(10369).StickerIcon;
  } else {
    return tmp(9036).ReactionIcon;
  }
};
