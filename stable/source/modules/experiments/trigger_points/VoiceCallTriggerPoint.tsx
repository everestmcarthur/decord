// Module ID: 17337
// Function ID: 17338
// Name: VoiceCallTriggerPoint
// Dependencies: [4477, 10814, 9181, 17338, 16835, 17339, 17340, 13187, 2]

// Module 17337 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9181 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17339 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17340 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17338).VoiceChannelHoistingExperiment, fn(16835).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13187).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10814).CommonTriggerPointConfiguration(items, fn(4477).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
