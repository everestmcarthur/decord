// Module ID: 13508
// Function ID: 13509
// Name: OpenNitroTriggerPoint
// Dependencies: [4524, 10900, 2]

// Module 13508 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4524 */;
import Helpers from "Helpers" /* 10900 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
