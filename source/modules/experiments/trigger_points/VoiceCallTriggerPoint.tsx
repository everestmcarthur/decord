// Module ID: 17417
// Function ID: 17418
// Name: VoiceCallTriggerPoint
// Dependencies: [4524, 10900, 9267, 17418, 16918, 17419, 17420, 13282, 2]

// Module 17417 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9267 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17419 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17420 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17418).VoiceChannelHoistingExperiment, fn(16918).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13282).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10900).CommonTriggerPointConfiguration(items, fn(4524).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
