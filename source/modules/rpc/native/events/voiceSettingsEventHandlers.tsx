// Module ID: 14611
// Function ID: 14612
// Name: voiceSettingsEventHandlers
// Dependencies: [14612, 9688, 2]

// Module 14611 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14612 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9688).getDeprecatedVoiceSettings, fn(9688).getVoiceSettings);
