// Module ID: 14551
// Function ID: 14552
// Name: voiceSettingsEventHandlers
// Dependencies: [14552, 9590, 2]

// Module 14551 (voiceSettingsEventHandlers)
import VoiceSettingsEventsFactory from "VoiceSettingsEventsFactory" /* 14552 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/events/voiceSettingsEventHandlers.tsx");

export const voiceSettingsEventHandlers = VoiceSettingsEventsFactory(fn(9590).getDeprecatedVoiceSettings, fn(9590).getVoiceSettings);
