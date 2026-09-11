// Module ID: 17416
// Function ID: 17417
// Name: VoiceCallTriggerPoint
// Dependencies: [4523, 10898, 9265, 17417, 16918, 17418, 17419, 13280, 2]

// Module 17416 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9265 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17418 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17419 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17417).VoiceChannelHoistingExperiment, fn(16918).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13280).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10898).CommonTriggerPointConfiguration(items, fn(4523).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
