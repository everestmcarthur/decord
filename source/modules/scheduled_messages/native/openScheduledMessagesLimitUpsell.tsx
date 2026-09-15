// Module ID: 7954
// Function ID: 7955
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7955, 7958, 2]
// Exports: default

// Module 7954 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7955 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7958 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
