// Module ID: 17128
// Function ID: 17129
// Name: utils/triggerIOSHaptic
// Dependencies: [12303, 4542, 2]
// Exports: default

// Module 17128 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4542 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12303 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
