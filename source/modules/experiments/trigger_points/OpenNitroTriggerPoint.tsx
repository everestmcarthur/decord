// Module ID: 13540
// Function ID: 13541
// Name: OpenNitroTriggerPoint
// Dependencies: [4553, 10938, 2]

// Module 13540 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4553 */;
import Helpers from "Helpers" /* 10938 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
