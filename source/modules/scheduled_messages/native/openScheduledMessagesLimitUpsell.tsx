// Module ID: 7922
// Function ID: 7923
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7923, 7926, 2]
// Exports: default

// Module 7922 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7923 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7926 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
