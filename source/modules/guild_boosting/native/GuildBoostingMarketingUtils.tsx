// Module ID: 12679
// Function ID: 12680
// Name: GuildBoostingMarketingUtils
// Dependencies: [4533, 8913, 12680, 10529, 12682, 12684, 9525, 9903, 11850, 10382, 5184, 10263, 2]
// Exports: getIconForPerk

// Module 12679 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4533 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8913).ReactionIcon;
  } else if (tmp(4533).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12680).SoundboardIcon;
  } else if (tmp(4533).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10529).GifIcon;
  } else if (tmp(4533).PerkIcons.AUDIO === perkIcon) {
    return tmp(12682).HeadphonesIcon;
  } else if (tmp(4533).PerkIcons.STREAM === perkIcon) {
    return tmp(12684).ScreenArrowIcon;
  } else if (tmp(4533).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9525).UploadIcon;
  } else if (tmp(4533).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9903).ShieldUserIcon;
  } else if (tmp(4533).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11850).ImagesIcon;
  } else if (tmp(4533).PerkIcons.VANITY === perkIcon) {
    return tmp(10382).StarIcon;
  } else if (tmp(4533).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5184).StageIcon;
  } else if (tmp(4533).PerkIcons.STICKER === perkIcon) {
    return tmp(10263).StickerIcon;
  } else {
    return tmp(8913).ReactionIcon;
  }
};
