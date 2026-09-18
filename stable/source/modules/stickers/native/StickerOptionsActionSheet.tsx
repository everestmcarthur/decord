// Module ID: 10410
// Function ID: 10411
// Name: StickerOptionsActionSheet
// Dependencies: [19, 21, 7190, 4258, 4527, 7198, 5687, 5605, 4503, 1114, 2]
// Exports: default

// Module 10410 (StickerOptionsActionSheet)
import ToastUtils from "ToastUtils" /* 4258 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ClipboardUtils from "ClipboardUtils" /* 7190 */;
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
  const obj3 = { icon: jsx(stickerUrl(4503).LinkIcon, {}), label: null, onPress: null };
  const intl = stickerUrl(1114).intl;
  obj3.label = intl.string(stickerUrl(1114).t.B1ubHx);
  obj3.onPress = callback;
  obj2.children = jsx(stickerUrl(5605).TableRow, { icon: jsx(stickerUrl(4503).LinkIcon, {}), label: null, onPress: null });
  obj.children = jsx(stickerUrl(5687).TableRowGroup, { hasIcons: true, children: null });
  return jsx(stickerUrl(7198).ActionSheet, { children: null });
};
