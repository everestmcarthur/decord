// Module ID: 17104
// Function ID: 17105
// Name: triggerIOSHaptic
// Dependencies: [12367, 4574, 2]
// Exports: default

// Module 17104 (triggerIOSHaptic)
import HapticUtils from "HapticUtils" /* 4574 */;
import MorphablePanelConstants from "MorphablePanelConstants" /* 12367 */;
import size from "module_2" /* 2 */;

const IS_IOS = MorphablePanelConstants.IS_IOS;
let result = size.fileFinishedImporting("modules/panels/morphable/native/triggerIOSHaptic.tsx");

export default function triggerIOSHaptic() {
  if (IS_IOS) {
    const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
  }
};
