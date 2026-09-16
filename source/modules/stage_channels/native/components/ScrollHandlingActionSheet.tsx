// Module ID: 8726
// Function ID: 8727
// Name: ScrollHandlingActionSheet
// Dependencies: [19, 21, 7260, 2]
// Exports: default

// Module 8726 (ScrollHandlingActionSheet)
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7260 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/ScrollHandlingActionSheet.tsx");

export default function ScrollHandlingActionSheet(children) {
  const merged = Object.assign(children, Object.assign({ children: 0, scrollableDeviceHeightBreakpoint: 0 }));
  const obj = { startExpanded: true };
  const merged1 = Object.assign(merged);
  obj.children = children.children;
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true });
};
