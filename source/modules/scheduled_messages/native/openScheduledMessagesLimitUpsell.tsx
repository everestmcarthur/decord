// Module ID: 7921
// Function ID: 7922
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [7922, 7925, 2]
// Exports: default

// Module 7921 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 7922 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 7925 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
