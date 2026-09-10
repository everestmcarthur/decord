// Module ID: 17368
// Function ID: 17369
// Name: VoiceCallTriggerPoint
// Dependencies: [4491, 10841, 9207, 17369, 16872, 17370, 17371, 13210, 2]

// Module 17368 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9207 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17370 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17371 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17369).VoiceChannelHoistingExperiment, fn(16872).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13210).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10841).CommonTriggerPointConfiguration(items, fn(4491).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
