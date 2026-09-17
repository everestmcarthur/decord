// Module ID: 7969
// Function ID: 7970
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7970, 7973, 2]
// Exports: default

// Module 7969 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7970 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7973 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
