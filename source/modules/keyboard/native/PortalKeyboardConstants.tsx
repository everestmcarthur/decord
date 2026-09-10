// Module ID: 12106
// Function ID: 12107
// Name: PortalKeyboardConstants
// Dependencies: [6677, 2]

// Module 12106 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6677 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
