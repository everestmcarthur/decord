// Module ID: 17105
// Function ID: 17106
// Name: triggerIOSHaptic
// Dependencies: [12369, 4575, 2]
// Exports: default

// Module 17105 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4575 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12369 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
