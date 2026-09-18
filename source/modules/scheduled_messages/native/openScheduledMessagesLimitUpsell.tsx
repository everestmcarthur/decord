// Module ID: 8052
// Function ID: 8053
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8053, 8056, 2]
// Exports: default

// Module 8052 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8053 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8056 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
