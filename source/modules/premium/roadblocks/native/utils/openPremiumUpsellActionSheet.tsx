// Module ID: 7923
// Function ID: 7924
// Name: openPremiumUpsellActionSheet
// Dependencies: [4574, 7924, 1896, 2]
// Exports: default

// Module 7923 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations, onDismiss) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7924, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, subfeatureName, analyticsLocations, onDismiss });
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
