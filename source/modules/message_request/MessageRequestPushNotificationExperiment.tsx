// Module ID: 10167
// Function ID: 10168
// Name: MessageRequestPushNotificationExperiment
// Dependencies: [1433, 2]

// Module 10167 (MessageRequestPushNotificationExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-07-message-request-push-notification", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null, 2: { enabled: true }, 3: { enabled: false } };
obj2[3] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestPushNotificationExperiment.tsx");

export default apexExperiment;
