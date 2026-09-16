// Module ID: 10545
// Function ID: 10546
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7299, 4335, 4605, 7307, 5773, 5691, 4580, 1115, 2]
// Exports: default

// Module 10545 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4335 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4605 */;
import ClipboardUtils from "ClipboardUtils" /* 7299 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stickers/native/StickerOptionsActionSheet.tsx");

export default function StickerOptionsActionSheet(stickerUrl) {
  stickerUrl = stickerUrl.stickerUrl;
  const items = [stickerUrl];
  const callback = noop.useCallback(() => {
    ClipboardUtils.copy(stickerUrl);
    const result = ToastUtils.presentCopiedToClipboard();
    ActionSheetActionCreatorsDefault.hideActionSheet();
  }, items);
  let obj = { children: null };
  let obj2 = { hasIcons: true, children: null };
  const obj3 = { icon: jsx(stickerUrl(4580).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1115).intl;
  obj3.label = intl.string(stickerUrl(1115).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(5691).TableRow, { icon: jsx(stickerUrl(4580).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(5773).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7307).ActionSheet, { children: null });
};
