// Module ID: 12419
// Function ID: 12420
// Name: ListSelectionItem
// Dependencies: [19, 21, 5657, 2]
// Exports: default

// Module 12419 (ListSelectionItem)
import TableRow from "TableRow" /* 5657 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  ({ Icon, message, onPress } = arg0);
  return jsx(TableRow.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
};
