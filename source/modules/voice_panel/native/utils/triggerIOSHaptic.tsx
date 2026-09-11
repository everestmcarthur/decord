// Module ID: 17176
// Function ID: 17177
// Name: utils/triggerIOSHaptic
// Dependencies: [12366, 4574, 2]
// Exports: default

// Module 17176 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4574 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12366 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
