// Module ID: 12549
// Function ID: 12550
// Name: PostReactionPermissionNudgeExperiment
// Dependencies: [1433, 2]

// Module 12549 (PostReactionPermissionNudgeExperiment)
import ApexExperiment from "ApexExperiment" /* 1433 */;
import size from "module_2" /* 2 */;

const obj = { name: "2026-04-post-reaction-push-banner", kind: "user", defaultConfig: { enabled: false }, variations: null };
const obj2 = { 1: null };
obj2[1] = { enabled: true };
obj.variations = obj2;
const apexExperiment = ApexExperiment.createApexExperiment(obj);
const result = size.fileFinishedImporting("modules/nuf/native/PostReactionPermissionNudgeExperiment.tsx");

export default apexExperiment;
