// Module ID: 11439
// Function ID: 11440
// Name: BlockedPaymentsCountryActionSheet
// Dependencies: [19, 21, 7150, 11440, 2]
// Exports: default

// Module 11439 (BlockedPaymentsCountryActionSheet)
import noopAll from "noop" /* 19 */;
import Background from "Background" /* 7150 */;
import BlockedPaymentsCountryDisplayDefault from "BlockedPaymentsCountryDisplay" /* 11440 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/billing/native/BlockedPaymentsCountryActionSheet.tsx");

export default function BlockedPaymentsCountryActionSheet() {
  return jsx(Background.BottomSheet, { children: jsx(BlockedPaymentsCountryDisplayDefault, {}) });
};
