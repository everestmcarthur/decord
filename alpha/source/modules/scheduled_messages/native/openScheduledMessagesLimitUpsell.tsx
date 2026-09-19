// Module ID: 8090
// Function ID: 8091
// Name: openScheduledMessagesLimitUpsell
// Dependencies: [8091, 8094, 2]
// Exports: default

// Module 8090 (openScheduledMessagesLimitUpsell)
import openPremiumUpsellActionSheetDefault from "openPremiumUpsellActionSheet" /* 8091 */;
import EntitlementFeatureNames from "EntitlementFeatureNames" /* 8094 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/scheduled_messages/native/openScheduledMessagesLimitUpsell.tsx");

export default function openScheduledMessagesLimitUpsell(arg0) {
  openPremiumUpsellActionSheetDefault(EntitlementFeatureNames.EntitlementFeatureNames.SCHEDULED_MESSAGES, undefined, arg0);
};
