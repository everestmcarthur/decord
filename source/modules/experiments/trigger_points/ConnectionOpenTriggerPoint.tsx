// Module ID: 13748
// Function ID: 13749
// Name: ConnectionOpenTriggerPoint
// Dependencies: [4524, 13749, 10900, 2]

// Module 13748 (ConnectionOpenTriggerPoint)
import ExperimentConstants from "ExperimentConstants" /* 4524 */;
import Helpers from "Helpers" /* 10900 */;
import ContentInventoryExperiments from "ContentInventoryExperiments" /* 13749 */;
import size from "module_2" /* 2 */;

const items = [ContentInventoryExperiments.HotwheelsActivityFeedNvidiaExperiment];
const commonTriggerPointConfiguration = new Helpers.CommonTriggerPointConfiguration(items, ExperimentConstants.CommonTriggerPoints.CONNECTION_OPEN, { location: "app open" });
const result = size.fileFinishedImporting("modules/experiments/trigger_points/ConnectionOpenTriggerPoint.tsx");

export const ConnectionOpenTriggerPoint = commonTriggerPointConfiguration;
