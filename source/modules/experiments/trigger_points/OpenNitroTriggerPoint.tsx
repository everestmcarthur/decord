// Module ID: 13506
// Function ID: 13507
// Name: OpenNitroTriggerPoint
// Dependencies: [4523, 10898, 2]

// Module 13506 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4523 */;
import Helpers from "Helpers" /* 10898 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
