// Module ID: 12662
// Function ID: 12663
// Name: GuildBoostingMarketingUtils
// Dependencies: [4533, 8886, 12663, 10513, 12665, 12667, 9503, 9884, 11833, 10366, 5181, 10244, 2]
// Exports: getIconForPerk

// Module 12662 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4533 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8886).ReactionIcon;
  } else if (tmp(4533).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12663).SoundboardIcon;
  } else if (tmp(4533).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10513).GifIcon;
  } else if (tmp(4533).PerkIcons.AUDIO === perkIcon) {
    return tmp(12665).HeadphonesIcon;
  } else if (tmp(4533).PerkIcons.STREAM === perkIcon) {
    return tmp(12667).ScreenArrowIcon;
  } else if (tmp(4533).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9503).UploadIcon;
  } else if (tmp(4533).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9884).ShieldUserIcon;
  } else if (tmp(4533).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11833).ImagesIcon;
  } else if (tmp(4533).PerkIcons.VANITY === perkIcon) {
    return tmp(10366).StarIcon;
  } else if (tmp(4533).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5181).StageIcon;
  } else if (tmp(4533).PerkIcons.STICKER === perkIcon) {
    return tmp(10244).StickerIcon;
  } else {
    return tmp(8886).ReactionIcon;
  }
};
