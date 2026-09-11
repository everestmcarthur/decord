// Module ID: 5654
// Function ID: 5655
// Name: TableRowDivider
// Dependencies: [19, 17, 5655, 21, 4607, 576, 4308, 2]
// Exports: TableRowDivider

// Module 5654 (TableRowDivider)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4308 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const TABLE_DIVIDER_WIDTH = fn(5655).TABLE_DIVIDER_WIDTH;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_6 = createStyles.createStyles((arg0, arg1) => {
  const obj = { height: TABLE_DIVIDER_WIDTH, paddingStart: null, marginTop: null };
  let num = 12;
  if (arg0) {
    num = arg1;
  }
  const obj2 = { container: obj, divider: { height: TABLE_DIVIDER_WIDTH, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
  obj.paddingStart = num;
  obj.marginTop = -TABLE_DIVIDER_WIDTH;
  return obj2;
});
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export const TableRowDivider = function TableRowDivider(adjustSpacingForIcon) {
  let flag = adjustSpacingForIcon.adjustSpacingForIcon;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6(flag, useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  const obj2 = { style: tmp.container, children: <View style={tmp.divider} /> };
  return <View style={tmp.container}><View style={tmp.divider} /></View>;
};
