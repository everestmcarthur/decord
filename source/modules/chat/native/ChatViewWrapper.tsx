// Module ID: 11482
// Function ID: 11483
// Name: ChatViewWrapper
// Dependencies: [11483, 11484, 11494, 2]

// Module 11482 (ChatViewWrapper)
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11484 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11494 */;
import AnimatedKeyboardExperiment from "AnimatedKeyboardExperiment" /* 11483 */;
import size from "module_2" /* 2 */;

if (AnimatedKeyboardExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = size.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
