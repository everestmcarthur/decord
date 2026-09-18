// Module ID: 13165
// Function ID: 13166
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8213, 8837, 2]
// Exports: default

// Module 13165 (useShouldShowPremiumProfileFrameEA)
import CollectiblesProfileFramesExperiment from "CollectiblesProfileFramesExperiment" /* 8213 */;
import CollectiblesProfileFramesPurchaseExperiment from "CollectiblesProfileFramesPurchaseExperiment" /* 8837 */;
import size from "module_2" /* 2 */;

const CollectiblesProfileFramesPurchaseExperimentDefault = CollectiblesProfileFramesPurchaseExperiment;

const result = size.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = CollectiblesProfileFramesExperiment.useIsProfileFramesEnabled(location);
  CollectiblesProfileFramesPurchaseExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === CollectiblesProfileFramesPurchaseExperiment.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
