// Module ID: 10437
// Function ID: 10438
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7203, 4271, 4541, 7211, 5701, 5619, 4517, 1114, 2]
// Exports: default

// Module 10437 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4271 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4541 */;
import ClipboardUtils from "ClipboardUtils" /* 7203 */;
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
  const obj3 = { icon: jsx(stickerUrl(4517).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1114).intl;
  obj3.label = intl.string(stickerUrl(1114).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(5619).TableRow, { icon: jsx(stickerUrl(4517).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(5701).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7211).ActionSheet, { children: null });
};
