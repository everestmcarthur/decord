// Module ID: 12066
// Function ID: 12067
// Name: PortalKeyboardConstants
// Dependencies: [6641, 2]

// Module 12066 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6641 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
