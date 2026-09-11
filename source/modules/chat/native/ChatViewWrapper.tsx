// Module ID: 11445
// Function ID: 11446
// Name: ChatViewWrapper
// Dependencies: [11446, 11447, 11457, 2]

// Module 11445 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11447 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11457 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11446 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
