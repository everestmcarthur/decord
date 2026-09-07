// Module ID: 12040
// Function ID: 12041
// Name: KEYBOARD_ANIMATION_DURATION
// Dependencies: [6627, 2]

// Module 12040 (KEYBOARD_ANIMATION_DURATION)
import set from "set" /* 2 */;
import BottomSheetModal from "BottomSheetModal" /* 6627 */;

const keyboardAnimationConfigs = BottomSheetModal.getKeyboardAnimationConfigs("keyboard", 250);
const result = set.fileFinishedImporting("modules/keyboard/native/PortalKeyboardConstants.tsx");

export const KEYBOARD_ANIMATION_DURATION = 250;
export const KEYBOARD_ANIMATION_CONFIG = keyboardAnimationConfigs;
