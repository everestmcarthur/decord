// Module ID: 13557
// Function ID: 13558
// Name: OpenNitroTriggerPoint
// Dependencies: [4554, 10955, 2]

// Module 13557 (OpenNitroTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4554 */;
import Helpers from "Helpers" /* 10955 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_NITRO, { location: "open nitro tab/settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenNitroTriggerPoint.tsx");

export const OpenNitroTriggerPoint = commonTriggerPointConfiguration;
