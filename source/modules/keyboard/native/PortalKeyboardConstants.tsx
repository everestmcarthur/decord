// Module ID: 12165
// Function ID: 12166
// Name: PortalKeyboardConstants
// Dependencies: [6728, 2]

// Module 12165 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6728 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
