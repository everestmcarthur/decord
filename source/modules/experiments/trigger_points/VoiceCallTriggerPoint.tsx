// Module ID: 17337
// Function ID: 17338
// Name: commonTriggerPointConfiguration
// Dependencies: [4477, 10814, 9180, 17338, 16835, 17339, 17340, 13187, 2]

// Module 17337 (commonTriggerPointConfiguration)
import experimentDefault from "experiment" /* 9180 */;
import experimentDefault2 from "experiment" /* 17339 */;
import experimentDefault3 from "experiment" /* 17340 */;

const items = [experimentDefault, require("experiment").VoiceChannelHoistingExperiment, require("experiment").HangoutWindowExperiment, experimentDefault2, experimentDefault3, require("experiment").VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new require("registeredExperimentIds").CommonTriggerPointConfiguration(items, require("ExperimentBuckets").CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const result = require("set").fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
