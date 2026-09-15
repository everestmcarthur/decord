// Module ID: 17243
// Function ID: 17244
// Name: utils/triggerIOSHaptic
// Dependencies: [12407, 4607, 2]
// Exports: default

// Module 17243 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4607 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12407 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
