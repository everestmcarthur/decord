// Module ID: 12467
// Function ID: 12468
// Name: ListSelectionItem
// Dependencies: [19, 21, 5691, 2]
// Exports: default

// Module 12467 (ListSelectionItem)
import TableRow from "TableRow" /* 5691 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default function ListSelectionItem(arg0) {
  ({ Icon, message, onPress } = arg0);
  return jsx(TableRow.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
};
