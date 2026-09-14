// Module ID: 11568
// Function ID: 11569
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 7253, 11569, 2]
// Exports: default

// Module 11568 (BlockedPaymentsCountryActionSheet)
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7253 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 11569 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Sheet_BottomSheet.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
};
