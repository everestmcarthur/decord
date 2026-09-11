// Module ID: 14578
// Function ID: 14579
// Name: voiceSettingsEventHandlers
// Dependencies: [14579, 9651, 2]

// Module 14578 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14579 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9651).getDeprecatedVoiceSettings, fn(9651).getVoiceSettings);
