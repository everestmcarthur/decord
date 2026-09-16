// Module ID: 7963
// Function ID: 7964
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7964, 7967, 2]
// Exports: default

// Module 7963 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7964 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7967 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
