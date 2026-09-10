// Module ID: 17056
// Function ID: 17057
// Name: triggerIOSHaptic
// Dependencies: [12304, 4542, 2]
// Exports: default

// Module 17056 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4542 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12304 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
