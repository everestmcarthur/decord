// Module ID: 13798
// Function ID: 13799
// Name: MobileConnectionOpenTriggerPoint
// Dependencies: [4554, 10955, 2]

// Module 13798 (MobileConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4554 */;
import Helpers from "Helpers" /* 10955 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN_MOBILE, { location: "app open mobile" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/native/MobileConnectionOpenTriggerPoint.tsx");

export const MobileConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
