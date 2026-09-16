// Module ID: 13795
// Function ID: 13796
// Name: ConnectionOpenTriggerPoint
// Dependencies: [4554, 13796, 10955, 2]

// Module 13795 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4554 */;
import Helpers from "Helpers" /* 10955 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13796 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
