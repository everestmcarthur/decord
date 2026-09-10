// Module ID: 10410
// Function ID: 10411
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7241, 4302, 4572, 7249, 5737, 5655, 4548, 1114, 2]
// Exports: default

// Module 10410 (EmojiOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4302 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import ClipboardUtils from "ClipboardUtils" /* 7241 */;
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
  const obj3 = { icon: jsx(emojiSrc(4548).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1114).intl;
  obj3.label = intl.string(emojiSrc(1114).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(5655).TableRow, { icon: jsx(emojiSrc(4548).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(5737).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7249).ActionSheet, { children: null });
};
