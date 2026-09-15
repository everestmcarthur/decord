// Module ID: 11487
// Function ID: 11488
// Name: ChatViewWrapper
// Dependencies: [11488, 11489, 11499, 2]

// Module 11487 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11489 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11499 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11488 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
