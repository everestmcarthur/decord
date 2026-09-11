// Module ID: 14576
// Function ID: 14577
// Name: voiceSettingsEventHandlers
// Dependencies: [14577, 9649, 2]

// Module 14576 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14577 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9649).getDeprecatedVoiceSettings, fn(9649).getVoiceSettings);
