// Module ID: 12570
// Function ID: 12571
// Name: MessageRequestRestrictionExperiment
// Dependencies: [1433, 2]

// Module 12570 (MessageRequestRestrictionExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-06-non-friend-messages-requests-in-uk", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/message_request/MessageRequestRestrictionExperiment.tsx");

export default apexExperiment;
