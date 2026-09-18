// Module ID: 17397
// Function ID: 17398
// Name: triggerIOSHaptic
// Dependencies: [12516, 4690, 2]
// Exports: default

// Module 17397 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4690 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12516 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
