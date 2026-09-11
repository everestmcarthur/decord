// Module ID: 5664
// Function ID: 5665
// Name: TableRowArrow
// Dependencies: [19, 21, 4607, 576, 5029, 5665, 2]
// Exports: TableRowArrow

// Module 5664 (TableRowArrow)
import nativeDefault from "native" /* 576 */;
import Icon from "Icon" /* 5029 */;
import _modDef5665 from "module_5665" /* 5665 */;
import noop from "module_19" /* 19 */;

const IconDefault = Icon;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
const obj2 = { icon: null, iconColor: null };
let size = { width: nativeDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: nativeDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
obj2.icon = size;
obj2.iconColor = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp = closure_4();
  const obj = { style: tmp.icon, color: tmp.iconColor.color, source: _modDef5665, size: Icon.IconSizes.CUSTOM };
  return jsx(IconDefault, { style: tmp.icon, color: tmp.iconColor.color, source: _modDef5665, size: Icon.IconSizes.CUSTOM });
};
