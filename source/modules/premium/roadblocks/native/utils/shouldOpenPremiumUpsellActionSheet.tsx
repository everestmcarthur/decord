// Module ID: 9413
// Function ID: 9414
// Name: shouldOpenPremiumUpsellActionSheet
// Dependencies: [7923, 1093, 7926, 9414, 2]
// Exports: default

// Module 9413 (shouldOpenPremiumUpsellActionSheet)
import ConstantsIOS from "ConstantsIOS" /* 1093 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7923 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (ConstantsIOS.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7926).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(1093).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7926).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(1093).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7926).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(1093).UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    let flag4 = tmp(9414).getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      openPremiumUpsellActionSheetDefault(tmp(7926).EntitlementFeatureNames.STICKERS_EVERYWHERE);
      flag4 = true;
    }
    return flag4;
  } else if (tmp(1093).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7926).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(1093).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7926).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
