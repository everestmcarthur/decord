// Module ID: 15751
// Function ID: 15752
// Name: ContextualOptInNudgeHoldoutExperiment
// Dependencies: [1434, 2]

// Module 15751 (ContextualOptInNudgeHoldoutExperiment)
import ApexExperiment from "ApexExperiment" /* 1434 */;
import size from "module_2" /* 2 */;

const apexExperiment = ApexExperiment.createApexExperiment({ name: "2026-06-contextual-opt-in-nudge-holdout", kind: "user", defaultConfig: { inHoldout: false }, variations: { 0: { inHoldout: false }, 1: { inHoldout: true } } });
const result = size.fileFinishedImporting("modules/nuf/native/ContextualOptInNudgeHoldoutExperiment.tsx");

export default apexExperiment;
