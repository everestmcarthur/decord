// Module ID: 17299
// Function ID: 17300
// Name: utils/triggerIOSHaptic
// Dependencies: [12415, 4606, 2]
// Exports: default

// Module 17299 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4606 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12415 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
