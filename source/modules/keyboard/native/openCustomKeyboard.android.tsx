// Module ID: 12124
// Function ID: 12125
// Name: openCustomKeyboard
// Dependencies: [1481, 7112, 4475, 12083, 2]
// Exports: default

// Module 12124 (openCustomKeyboard)
import KeyboardUIStore from "KeyboardUIStore" /* 1481 */;
import PortalKeyboardUIStore from "PortalKeyboardUIStore" /* 4475 */;
import RunAfterInteractionsUtils from "RunAfterInteractionsUtils" /* 7112 */;
import ChatInputNativeCommandsDefault from "ChatInputNativeCommands" /* 12083 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/keyboard/native/openCustomKeyboard.android.tsx");

export default function openCustomKeyboard(secondaryTextFieldRef) {
  ({ channelId: require, chatInputRef: importDefault, chatInputNativeRef: dependencyMap, keyboardParams } = secondaryTextFieldRef);
  secondaryTextFieldRef = secondaryTextFieldRef.secondaryTextFieldRef;
  KeyboardUIStore.setKeyboardType(keyboardParams);
  RunAfterInteractionsUtils.runAfterInteractions(() => {
    const current = ref.current;
    current.blur();
    if (secondaryTextFieldRef != null) {
      const current2 = secondaryTextFieldRef.current;
      if (current2 != null) {
        current2.blur();
      }
    }
    PortalKeyboardUIStore.openPortalKeyboard(keyboardParams.type, closure_1_0, ref);
    ChatInputNativeCommandsDefault.openCustomKeyboard(ref2.current);
  });
};
