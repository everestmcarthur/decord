// Module ID: 12131
// Function ID: 12132
// Name: PortalKeyboardConstants
// Dependencies: [6699, 2]

// Module 12131 (PortalKeyboardConstants)
import BottomSheetModal from "BottomSheetModal" /* 6699 */;
import size from "module_2" /* 2 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = size.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
