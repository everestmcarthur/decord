// Module ID: 11483
// Function ID: 11484
// Name: ChatViewWrapper
// Dependencies: [11484, 11485, 11495, 2]

// Module 11483 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11485 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11495 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11484 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
