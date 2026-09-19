// Module ID: 14798
// Function ID: 14799
// Name: voiceSettingsEventHandlers
// Dependencies: [14799, 9584, 2]

// Module 14798 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14799 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9584).getDeprecatedVoiceSettings, fn(9584).getVoiceSettings);
