// Module ID: 17446
// Function ID: 17447
// Name: VoiceCallTriggerPoint
// Dependencies: [4553, 10937, 9304, 17447, 16945, 17448, 17449, 13313, 2]

// Module 17446 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9304 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17448 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17449 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17447).VoiceChannelHoistingExperiment, fn(16945).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13313).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10937).CommonTriggerPointConfiguration(items, fn(4553).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
