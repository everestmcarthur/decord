// Module ID: 11678
// Function ID: 11679
// Name: LongPressMessageChatItemPreview
// Dependencies: [21, 4560, 576, 7932, 8657, 2]
// Exports: default

// Module 11678 (LongPressMessageChatItemPreview)
import set from "set" /* 2 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 576 */;
import setOptionsDefault from "setOptions" /* 7932 */;
import DCDChatItemDefault from "DCDChatItem" /* 8657 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const jsx = jsxProd.jsx;
let obj = { chatItem: null };
obj = { maxHeight: 2 * ThemesDefault.space.PX_80 };
obj[0] = obj;
let closure_3 = createCacheKey.createStyles(obj);
let closure_4 = new setOptionsDefault();
const tmp2 = new setOptionsDefault();
const result = set.fileFinishedImporting("modules/messages/native/long_press/LongPressMessageChatItemPreview.tsx");

export default function LongPressMessageChatItemPreview(message) {
  const obj = { rowGenerator: closure_4, message: message.message, maxHeight: callback().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" };
  const tmp = callback();
  obj[3] = ThemesDefault.colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
  return jsx(DCDChatItemDefault, { rowGenerator: closure_4, message: message.message, maxHeight: callback().chatItem.maxHeight, backgroundColor: null, pointerEvents: "none" });
};
