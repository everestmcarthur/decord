// Module ID: 10537
// Function ID: 10538
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7296, 4337, 4606, 7304, 5772, 5690, 4582, 1115, 2]
// Exports: default

// Module 10537 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4337 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4606 */;
import ClipboardUtils from "ClipboardUtils" /* 7296 */;
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
  const obj3 = { icon: jsx(stickerUrl(4582).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1115).intl;
  obj3.label = intl.string(stickerUrl(1115).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(5690).TableRow, { icon: jsx(stickerUrl(4582).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(5772).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7304).ActionSheet, { children: null });
};
