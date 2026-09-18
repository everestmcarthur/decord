// Module ID: 17025
// Function ID: 17026
// Name: triggerIOSHaptic
// Dependencies: [12278, 4528, 2]
// Exports: default

// Module 17025 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4528 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12278 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
