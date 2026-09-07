// Module ID: 15192
// Function ID: 15193
// Name: commonTriggerPointConfiguration
// Dependencies: [4477, 10814, 2]

// Module 15192 (commonTriggerPointConfiguration)
import set from "set" /* 2 */;
import ExperimentBuckets from "ExperimentBuckets" /* 4477 */;
import registeredExperimentIds from "registeredExperimentIds" /* 10814 */;

const commonTriggerPointConfiguration = new registeredExperimentIds.CommonTriggerPointConfiguration([], ExperimentBuckets.CommonTriggerPoints.QUEST_BAR_RENDERED, { location: "quest bar rendered" });
const result = set.fileFinishedImporting("modules/experiments/trigger_points/QuestBarRenderedTriggerPoint.tsx");

export const QuestBarRenderedTriggerPoint = commonTriggerPointConfiguration;
