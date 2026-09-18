// Module ID: 10345
// Function ID: 10346
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7190, 4258, 4527, 7198, 5687, 5605, 4503, 1114, 2]
// Exports: default

// Module 10345 (EmojiOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/emoji/EmojiOptionsActionSheet.tsx");

export default function EmojiOptionsActionSheet(emojiSrc) {
  emojiSrc = emojiSrc.emojiSrc;
  const items = [emojiSrc];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(emojiSrc);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(emojiSrc(4503).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1114).intl;
  obj3.label = intl.string(emojiSrc(1114).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(5605).TableRow, { icon: jsx(emojiSrc(4503).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(5687).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7198).ActionSheet, { children: null });
};
