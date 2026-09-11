// Module ID: 10431
// Function ID: 10432
// Name: EmojiOptionsActionSheet
// Dependencies: [19, 21, 7263, 4304, 4574, 7271, 5739, 5657, 4550, 1114, 2]
// Exports: default

// Module 10431 (EmojiOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4304 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import ClipboardUtils from "ClipboardUtils" /* 7263 */;
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
  const obj3 = { icon: jsx(emojiSrc(4550).LinkIcon, {}), label: null, onPress: null };
  const intl = emojiSrc(1114).intl;
  obj3.label = intl.string(emojiSrc(1114).t.cIoudn);
  obj3.onPress = callback;
  obj2.children = jsx(emojiSrc(5657).TableRow, { icon: jsx(emojiSrc(4550).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(emojiSrc(5739).TableRowGroup, { hasIcons: true, children: null });
  return jsx(emojiSrc(7271).ActionSheet, { children: null });
};
