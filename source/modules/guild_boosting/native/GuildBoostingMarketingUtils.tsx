// Module ID: 12531
// Function ID: 12532
// Name: getIconForPerk
// Dependencies: [4454, 8762, 12532, 10386, 12534, 12536, 9376, 9757, 11704, 10240, 5097, 10119, 2]
// Exports: getIconForPerk

// Module 12531 (getIconForPerk)
import set from "set" /* 2 */;
import getGuildTierFromGuild from "getGuildTierFromGuild" /* 4454 */;

const result = set.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (getGuildTierFromGuild.PerkIcons.EMOJI === perkIcon) {
    return tmp(8762).ReactionIcon;
  } else if (tmp(4454).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12532).SoundboardIcon;
  } else if (tmp(4454).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10386).GifIcon;
  } else if (tmp(4454).PerkIcons.AUDIO === perkIcon) {
    return tmp(12534).HeadphonesIcon;
  } else if (tmp(4454).PerkIcons.STREAM === perkIcon) {
    return tmp(12536).ScreenArrowIcon;
  } else if (tmp(4454).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9376).UploadIcon;
  } else if (tmp(4454).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9757).ShieldUserIcon;
  } else if (tmp(4454).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11704).ImagesIcon;
  } else if (tmp(4454).PerkIcons.VANITY === perkIcon) {
    return tmp(10240).StarIcon;
  } else if (tmp(4454).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5097).StageIcon;
  } else if (tmp(4454).PerkIcons.STICKER === perkIcon) {
    return tmp(10119).StickerIcon;
  } else {
    return tmp(8762).ReactionIcon;
  }
};
