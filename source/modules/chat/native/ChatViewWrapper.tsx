// Module ID: 11354
// Function ID: 11355
// Dependencies: [11355, 11356, 11366, 2]

// Module 11354
import set from "set" /* 2 */;
import ChatViewWrapperAnimatedKeyboardDefault from "ChatViewWrapperAnimatedKeyboard" /* 11356 */;
import ChatViewWrapperBaseDefault from "ChatViewWrapperBase" /* 11366 */;
import apexExperiment from "apexExperiment" /* 11355 */;

if (apexExperiment.isAnimatedAndroidKeyboard()) {
  let importDefaultResult = ChatViewWrapperAnimatedKeyboardDefault;
} else {
  importDefaultResult = ChatViewWrapperBaseDefault;
}
const result = set.fileFinishedImporting("modules/chat/native/ChatViewWrapper.tsx");

export default importDefaultResult;
