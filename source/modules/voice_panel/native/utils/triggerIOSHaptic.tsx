// Module ID: 17187
// Function ID: 17188
// Name: utils/triggerIOSHaptic
// Dependencies: [12343, 4573, 2]
// Exports: default

// Module 17187 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4573 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12343 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
