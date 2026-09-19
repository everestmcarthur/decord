// Module ID: 17744
// Function ID: 17745
// Name: VoiceCallTriggerPoint
// Dependencies: [4672, 11070, 9994, 17745, 17289, 17746, 17747, 13485, 2]

// Module 17744 (VoiceCallTriggerPoint)
import GuildVoiceRingingExperimentDefault from "GuildVoiceRingingExperiment" /* 9994 */;
import PastVcActivityMessagesExperimentDefault from "PastVcActivityMessagesExperiment" /* 17746 */;
import VoiceCallTriggerPointExperimentDefault from "VoiceCallTriggerPointExperiment" /* 17747 */;

const items = [GuildVoiceRingingExperimentDefault, fn(17745).VoiceChannelHoistingExperiment, fn(17289).HangoutWindowExperiment, PastVcActivityMessagesExperimentDefault, VoiceCallTriggerPointExperimentDefault, fn(13485).VoiceChannelBadgeExperiment];
const commonTriggerPointConfiguration = new fn(11070).CommonTriggerPointConfiguration(items, fn(4672).CommonTriggerPoints.VOICE_CALL, { location: "voice call initiated" });
const size = fn(2);
const result = size.fileFinishedImporting("modules/experiments/trigger_points/VoiceCallTriggerPoint.tsx");

export const VoiceCallTriggerPoint = commonTriggerPointConfiguration;
