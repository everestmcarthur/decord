// Module ID: 10097
// Function ID: 10098
// Name: PremiumFeatureUpsellUtils
// Dependencies: [5104, 7958, 1094, 38, 2]
// Exports: getUpsellType, isSoundboardSectionNitroLocked

// Module 10097 (PremiumFeatureUpsellUtils)
import _modDef38 from "module_38" /* 38 */;
import SoundboardTypes from "SoundboardTypes" /* 5104 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7958 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/PremiumFeatureUpsellUtils.tsx");

export const isSoundboardSectionNitroLocked = function isSoundboardSectionNitroLocked(guild_id, categoryInfo) {
  let tmp = categoryInfo.type === SoundboardTypes.SoundboardSoundGridSectionType.GUILD;
  if (tmp) {
    tmp = categoryInfo.guild.id !== guild_id;
  }
  return tmp;
};
export const getUpsellType = function getUpsellType(EMOJIS_EVERYWHERE) {
  if (EntitlementFeatureNames.EntitlementFeatureNames.ANIMATED_EMOJIS === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.ANIMATED_EMOJI;
  } else if (tmp(7958).EntitlementFeatureNames.EMOJIS_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.GLOBAL_EMOJI;
  } else if (tmp(7958).EntitlementFeatureNames.STICKERS_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.GLOBAL_STICKER;
  } else if (tmp(7958).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.UPLOAD;
  } else if (tmp(7958).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.SOUNDBOARD;
  } else if (tmp(7958).EntitlementFeatureNames.CLIENT_THEMES === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.CLIENT_THEMES;
  } else if (tmp(7958).EntitlementFeatureNames.APP_ICONS === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.APP_ICONS;
  } else if (tmp(7958).EntitlementFeatureNames.SAVED_MESSAGES === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.FOR_LATER;
  } else if (tmp(7958).EntitlementFeatureNames.SCHEDULED_MESSAGES === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.SCHEDULED_MESSAGES;
  } else if (tmp(7958).EntitlementFeatureNames.STREAM_HIGH_QUALITY === EMOJIS_EVERYWHERE) {
    return tmp(1094).UpsellTypes.STREAM_HIGH_QUALITY;
  } else {
    const _HermesInternal = HermesInternal;
    _modDef38(false, "Missing featureName: " + EMOJIS_EVERYWHERE);
  }
};
