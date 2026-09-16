// Module ID: 14640
// Function ID: 14641
// Name: voiceSettingsEventHandlers
// Dependencies: [14641, 9701, 2]

// Module 14640 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14641 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9701).getDeprecatedVoiceSettings, fn(9701).getVoiceSettings);
