// Module ID: 9463
// Function ID: 9464
// Name: shouldOpenPremiumUpsellActionSheet
// Dependencies: [7964, 1094, 7967, 9464, 2]
// Exports: default

// Module 9463 (shouldOpenPremiumUpsellActionSheet)
import ConstantsIOS from "ConstantsIOS" /* 1094 */;
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7964 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/shouldOpenPremiumUpsellActionSheet.tsx");

export default function maybeOpenPremiumUpsellActionSheet(initialUpsellKey) {
  initialUpsellKey = initialUpsellKey.initialUpsellKey;
  if (ConstantsIOS.UpsellTypes.UPLOAD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7967).EntitlementFeatureNames.INCREASED_FILE_UPLOAD_SIZE);
    return true;
  } else if (tmp(1094).UpsellTypes.GLOBAL_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7967).EntitlementFeatureNames.EMOJIS_EVERYWHERE);
    return true;
  } else if (tmp(1094).UpsellTypes.ANIMATED_EMOJI === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7967).EntitlementFeatureNames.ANIMATED_EMOJIS);
    return true;
  } else if (tmp(1094).UpsellTypes.GLOBAL_STICKER === initialUpsellKey) {
    let flag4 = tmp(9464).getMobileStickerPickerUpsellRestyleEnabled("native.shouldOpenPremiumUpsellActionSheet");
    if (flag4) {
      openPremiumUpsellActionSheetDefault(tmp(7967).EntitlementFeatureNames.STICKERS_EVERYWHERE);
      flag4 = true;
    }
    return flag4;
  } else if (tmp(1094).UpsellTypes.SOUNDBOARD === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7967).EntitlementFeatureNames.SOUNDBOARD_EVERYWHERE);
    return true;
  } else if (tmp(1094).UpsellTypes.STREAM_HIGH_QUALITY === initialUpsellKey) {
    openPremiumUpsellActionSheetDefault(tmp(7967).EntitlementFeatureNames.STREAM_HIGH_QUALITY);
    return true;
  } else {
    return false;
  }
};
