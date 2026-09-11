// Module ID: 10496
// Function ID: 10497
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7263, 4304, 4574, 7271, 5739, 5657, 4550, 1114, 2]
// Exports: default

// Module 10496 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4304 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import ClipboardUtils from "ClipboardUtils" /* 7263 */;
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
  const obj3 = { icon: jsx(stickerUrl(4550).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1114).intl;
  obj3.label = intl.string(stickerUrl(1114).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(5657).TableRow, { icon: jsx(stickerUrl(4550).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(5739).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7271).ActionSheet, { children: null });
};
