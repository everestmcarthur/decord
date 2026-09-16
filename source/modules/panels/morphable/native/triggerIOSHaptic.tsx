// Module ID: 17227
// Function ID: 17228
// Name: triggerIOSHaptic
// Dependencies: [12416, 4606, 2]
// Exports: default

// Module 17227 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4606 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12416 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
