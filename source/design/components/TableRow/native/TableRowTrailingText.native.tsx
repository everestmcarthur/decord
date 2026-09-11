// Module ID: 5666
// Function ID: 5667
// Name: TableRowTrailingText
// Dependencies: [19, 21, 4603, 2]
// Exports: TableRowTrailingText

// Module 5666 (TableRowTrailingText)
import Text_Text from "Text/Text" /* 4603 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/TableRow/native/TableRowTrailingText.native.tsx");

export const TableRowTrailingText = function TableRowTrailingText(children) {
  return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "text-muted", lineClamp: 1, children: children.text });
};
