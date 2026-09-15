// Module ID: 14622
// Function ID: 14623
// Name: voiceSettingsEventHandlers
// Dependencies: [14623, 9690, 2]

// Module 14622 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14623 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9690).getDeprecatedVoiceSettings, fn(9690).getVoiceSettings);
