// Module ID: 17340
// Function ID: 17341
// Name: utils/triggerIOSHaptic
// Dependencies: [12424, 4608, 2]
// Exports: default

// Module 17340 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4608 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12424 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
