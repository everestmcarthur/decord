// Module ID: 7270
// Function ID: 7271
// Name: ActionSheet
// Dependencies: [19, 21, 4606, 576, 7223, 2]

// Module 7270 (ActionSheet)
import nativeDefault from "native" /* 576 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7223 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4606);
let obj = { content: { paddingHorizontal: nativeDefault.space.PX_16 }, body: { gap: 24 } };
let closure_3 = createStyles.createStyles(obj);
const obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = noop.forwardRef((arg0, ref) => {
  const obj = { ref };
  const merged = Object.assign(arg0);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = closure_3());
  return jsx(Sheet_BottomSheet.BottomSheet, { ref });
});
