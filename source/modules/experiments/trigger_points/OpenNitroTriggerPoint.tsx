// Module ID: 13539
// Function ID: 13540
// Name: OpenNitroTriggerPoint
// Dependencies: [4553, 10937, 2]

// Module 13539 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4553 */;
import Helpers from "Helpers" /* 10937 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
