// Module ID: 15146
// Function ID: 15147
// Name: QuestHomeOpenTriggerPoint
// Dependencies: [4523, 10898, 2]

// Module 15146 (QuestHomeOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4523 */;
import Helpers from "Helpers" /* 10898 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.QUEST_HOME_OPEN, { location: "open quest home" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/QuestHomeOpenTriggerPoint.tsx");

export const QuestHomeOpenTriggerPoint = commonTriggerPointConfiguration;
