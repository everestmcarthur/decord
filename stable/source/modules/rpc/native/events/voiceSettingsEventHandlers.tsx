// Module ID: 14526
// Function ID: 14527
// Name: voiceSettingsEventHandlers
// Dependencies: [14527, 9564, 2]

// Module 14526 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14527 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9564).getDeprecatedVoiceSettings, fn(9564).getVoiceSettings);
