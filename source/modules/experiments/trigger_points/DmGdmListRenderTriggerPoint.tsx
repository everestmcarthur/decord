// Module ID: 16121
// Function ID: 16122
// Name: DmGdmListRenderTriggerPoint
// Dependencies: [4524, 10900, 2]

// Module 16121 (DmGdmListRenderTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4524 */;
import Helpers from "Helpers" /* 10900 */;
import size from "module_2" /* 2 */;

const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration([], ExperimentConstants.CommonTriggerPoints.DM_GDM_LIST_RENDER, { location: "dm/gdm list rendered" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/DmGdmListRenderTriggerPoint.tsx");

export const DmGdmListRenderTriggerPoint = commonTriggerPointConfiguration;
