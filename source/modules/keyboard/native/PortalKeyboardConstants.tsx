// Module ID: 12170
// Function ID: 12171
// Name: PortalKeyboardConstants
// Dependencies: [6732, 2]

// Module 12170 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6732 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
