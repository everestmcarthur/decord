// Module ID: 12287
// Function ID: 12288
// Name: PortalKeyboardConstants
// Dependencies: [6864, 2]

// Module 12287 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6864 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
