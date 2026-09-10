// Module ID: 12557
// Function ID: 12558
// Name: GuildBoostingMarketingUtils
// Dependencies: [4468, 8790, 12558, 10413, 12560, 12562, 9403, 9784, 11730, 10267, 5111, 10146, 2]
// Exports: getIconForPerk

// Module 12557 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4468 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8790).ReactionIcon;
  } else if (tmp(4468).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12558).SoundboardIcon;
  } else if (tmp(4468).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10413).GifIcon;
  } else if (tmp(4468).PerkIcons.AUDIO === perkIcon) {
    return tmp(12560).HeadphonesIcon;
  } else if (tmp(4468).PerkIcons.STREAM === perkIcon) {
    return tmp(12562).ScreenArrowIcon;
  } else if (tmp(4468).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9403).UploadIcon;
  } else if (tmp(4468).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9784).ShieldUserIcon;
  } else if (tmp(4468).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11730).ImagesIcon;
  } else if (tmp(4468).PerkIcons.VANITY === perkIcon) {
    return tmp(10267).StarIcon;
  } else if (tmp(4468).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5111).StageIcon;
  } else if (tmp(4468).PerkIcons.STICKER === perkIcon) {
    return tmp(10146).StickerIcon;
  } else {
    return tmp(8790).ReactionIcon;
  }
};
