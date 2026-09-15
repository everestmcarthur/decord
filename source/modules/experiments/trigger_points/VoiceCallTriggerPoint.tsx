// Module ID: 17486
// Function ID: 17487
// Name: VoiceCallTriggerPoint
// Dependencies: [4556, 10942, 9307, 17487, 16985, 17488, 17489, 13319, 2]

// Module 17486 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9307 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17488 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17489 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17487).VoiceChannelHoistingExperiment, fn(16985).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13319).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10942).CommonTriggerPointConfiguration(items, fn(4556).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
