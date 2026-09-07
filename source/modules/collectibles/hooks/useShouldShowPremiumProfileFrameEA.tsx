// Module ID: 13165
// Function ID: 13166
// Name: useShouldShowPremiumProfileFrameEA
// Dependencies: [8212, 8836, 2]
// Exports: default

// Module 13165 (useShouldShowPremiumProfileFrameEA)
import set from "set" /* 2 */;
import apexExperiment from "apexExperiment" /* 8212 */;
import apexExperiment2 from "apexExperiment" /* 8836 */;
import apexExperimentDefault from "apexExperiment" /* 8836 */;

const result = set.fileFinishedImporting("modules/collectibles/hooks/useShouldShowPremiumProfileFrameEA.tsx");

export default function useShouldShowPremiumProfileFrameEA(location) {
  let isProfileFramesEnabled = apexExperiment.useIsProfileFramesEnabled(location);
  apexExperimentDefault;
  if (isProfileFramesEnabled) {
    isProfileFramesEnabled = tmp5 === apexExperiment2.ProfileFramesPurchaseBucket.PAID_PREMIUM_SUBSCRIBERS_ONLY;
  }
  return isProfileFramesEnabled;
};
