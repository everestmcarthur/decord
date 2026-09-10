// Module ID: 12597
// Function ID: 12598
// Name: GuildBoostingMarketingUtils
// Dependencies: [4499, 8827, 12598, 10451, 12600, 12602, 9441, 9822, 11770, 10305, 5147, 10184, 2]
// Exports: getIconForPerk

// Module 12597 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4499 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8827).ReactionIcon;
  } else if (tmp(4499).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12598).SoundboardIcon;
  } else if (tmp(4499).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10451).GifIcon;
  } else if (tmp(4499).PerkIcons.AUDIO === perkIcon) {
    return tmp(12600).HeadphonesIcon;
  } else if (tmp(4499).PerkIcons.STREAM === perkIcon) {
    return tmp(12602).ScreenArrowIcon;
  } else if (tmp(4499).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9441).UploadIcon;
  } else if (tmp(4499).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9822).ShieldUserIcon;
  } else if (tmp(4499).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11770).ImagesIcon;
  } else if (tmp(4499).PerkIcons.VANITY === perkIcon) {
    return tmp(10305).StarIcon;
  } else if (tmp(4499).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5147).StageIcon;
  } else if (tmp(4499).PerkIcons.STICKER === perkIcon) {
    return tmp(10184).StickerIcon;
  } else {
    return tmp(8827).ReactionIcon;
  }
};
