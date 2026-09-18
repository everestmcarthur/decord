// Module ID: 12040
// Function ID: 12041
// Name: PortalKeyboardConstants
// Dependencies: [6627, 2]

// Module 12040 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
