// Module ID: 17542
// Function ID: 17543
// Name: VoiceCallTriggerPoint
// Dependencies: [4554, 10955, 9318, 17543, 17042, 17544, 17545, 13330, 2]

// Module 17542 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9318 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17544 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17545 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17543).VoiceChannelHoistingExperiment, fn(17042).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13330).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(10955).CommonTriggerPointConfiguration(items, fn(4554).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
