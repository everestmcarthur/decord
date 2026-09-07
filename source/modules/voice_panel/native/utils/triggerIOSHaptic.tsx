// Module ID: 17097
// Function ID: 17098
// Name: triggerIOSHaptic
// Dependencies: [12277, 4528, 2]
// Exports: default

// Module 17097 (triggerIOSHaptic)
import set from "set" /* 2 */;
import HapticFeedbackTypes from "HapticFeedbackTypes" /* 4528 */;
import VoicePanelModes from "VoicePanelModes" /* 12277 */;

const IS_IOS = VoicePanelModes.IS_IOS;
let result = set.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticFeedbackTypes.triggerHapticFeedback(HapticFeedbackTypes.HapticFeedbackTypes.IMPACT_MEDIUM);
    const obj = HapticFeedbackTypes;
  }
};
