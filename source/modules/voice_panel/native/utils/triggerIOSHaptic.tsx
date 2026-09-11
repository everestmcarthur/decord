// Module ID: 17177
// Function ID: 17178
// Name: utils/triggerIOSHaptic
// Dependencies: [12368, 4575, 2]
// Exports: default

// Module 17177 (utils/triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4575 */;
import VoicePanelConstants from "VoicePanelConstants" /* 12368 */;
import size from "module_2" /* 2 */;

const IS_IOS = VoicePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/voice_panel/native/utils/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
