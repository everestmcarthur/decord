// Module ID: 17474
// Function ID: 17475
// Name: triggerIOSHaptic
// Dependencies: [12525, 4724, 2]
// Exports: default

// Module 17474 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4724 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12525 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
