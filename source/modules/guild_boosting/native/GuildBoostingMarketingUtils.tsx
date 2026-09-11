// Module ID: 12622
// Function ID: 12623
// Name: GuildBoostingMarketingUtils
// Dependencies: [4501, 8850, 12623, 10472, 12625, 12627, 9464, 9845, 11794, 10326, 5149, 10205, 2]
// Exports: getIconForPerk

// Module 12622 (GuildBoostingMarketingUtils)
import GuildBoostingUtils from "GuildBoostingUtils" /* 4501 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_boosting/native/GuildBoostingMarketingUtils.tsx");

export const getIconForPerk = function getIconForPerk(perkIcon) {
  if (GuildBoostingUtils.PerkIcons.EMOJI === perkIcon) {
    return tmp(8850).ReactionIcon;
  } else if (tmp(4501).PerkIcons.SOUNDBOARD === perkIcon) {
    return tmp(12623).SoundboardIcon;
  } else if (tmp(4501).PerkIcons.ANIMATED === perkIcon) {
    return tmp(10472).GifIcon;
  } else if (tmp(4501).PerkIcons.AUDIO === perkIcon) {
    return tmp(12625).HeadphonesIcon;
  } else if (tmp(4501).PerkIcons.STREAM === perkIcon) {
    return tmp(12627).ScreenArrowIcon;
  } else if (tmp(4501).PerkIcons.UPLOAD === perkIcon) {
    return tmp(9464).UploadIcon;
  } else if (tmp(4501).PerkIcons.CUSTOM_ROLE_ICON === perkIcon) {
    return tmp(9845).ShieldUserIcon;
  } else if (tmp(4501).PerkIcons.CUSTOMIZATION === perkIcon) {
    return tmp(11794).ImagesIcon;
  } else if (tmp(4501).PerkIcons.VANITY === perkIcon) {
    return tmp(10326).StarIcon;
  } else if (tmp(4501).PerkIcons.STAGE_VIDEO === perkIcon) {
    return tmp(5149).StageIcon;
  } else if (tmp(4501).PerkIcons.STICKER === perkIcon) {
    return tmp(10205).StickerIcon;
  } else {
    return tmp(8850).ReactionIcon;
  }
};
