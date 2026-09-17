// Module ID: 14648
// Function ID: 14649
// Name: voiceSettingsEventHandlers
// Dependencies: [14649, 9712, 2]

// Module 14648 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14649 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9712).getDeprecatedVoiceSettings, fn(9712).getVoiceSettings);
