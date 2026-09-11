// Module ID: 16990
// Function ID: 16991
// Name: OpenUserSettingsTriggerPoint
// Dependencies: [4524, 10900, 2]

// Module 16990 (OpenUserSettingsTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4524 */;
import Helpers from "Helpers" /* 10900 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.OPEN_USER_SETTINGS, { location: "open user settings" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/OpenUserSettingsTriggerPoint.tsx");

export const OpenUserSettingsTriggerPoint = commonTriggerPointConfiguration;
