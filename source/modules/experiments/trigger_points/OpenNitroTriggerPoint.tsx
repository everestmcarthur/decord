// Module ID: 13438
// Function ID: 13439
// Name: OpenNitroTriggerPoint
// Dependencies: [4491, 10841, 2]

// Module 13438 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4491 */;
import Helpers from "Helpers" /* 10841 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
