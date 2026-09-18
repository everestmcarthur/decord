// Module ID: 14743
// Function ID: 14744
// Name: voiceSettingsEventHandlers
// Dependencies: [14744, 9806, 2]

// Module 14743 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14744 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9806).getDeprecatedVoiceSettings, fn(9806).getVoiceSettings);
