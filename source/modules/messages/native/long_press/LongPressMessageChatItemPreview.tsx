// Module ID: 11744
// Function ID: 11745
// Name: LongPressMessageChatItemPreview
// Dependencies: [21, 4605, 576, 7984, 8722, 2]
// Exports: default

// Module 11744 (LongPressMessageChatItemPreview)
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import RowGeneratorDefault from "RowGenerator" /* 7984 */;
import ChatItemDefault from "ChatItem" /* 8722 */;
import createStyles from "createStyles" /* 4605 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let obj = { chatItem: { maxHeight: 2 * nativeDefault.space.PX_80 } };
let closure_3 = createStyles.createStyles(obj);
const obj2 = { maxHeight: 2 * nativeDefault.space.PX_80 };
const rowGenerator = new RowGeneratorDefault();
const result = size.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  const obj = { rowGenerator, message: message.message, maxHeight: closure_3().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" };
  const tmp = closure_3();
  obj.backgroundColor = nativeDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(ChatItemDefault, { rowGenerator, message: message.message, maxHeight: closure_3().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" });
};
