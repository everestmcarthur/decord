// Module ID: 7922
// Function ID: 7923
// Name: openPremiumUpsellActionSheet
// Dependencies: [4573, 7923, 1896, 2]
// Exports: default

// Module 7922 (openPremiumUpsellActionSheet)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4573 */;
import size from "module_2" /* 2 */;

const PremiumUpsellActionSheetKey = "PremiumUpsellActionSheetKey";
const result = size.fileFinishedImporting("modules/premium/roadblocks/native/utils/openPremiumUpsellActionSheet.tsx");

export default function openPremiumUpsellActionSheet(featureName, subfeatureName, analyticsLocations, onDismiss) {
  ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(7923, dependencyMap.paths), PremiumUpsellActionSheetKey, { featureName, subfeatureName, analyticsLocations, onDismiss });
};
export const PREMIUM_UPSELL_ACTION_SHEET_KEY = "PremiumUpsellActionSheetKey";
