// Module ID: 16682
// Function ID: 16683
// Name: MemberRowPlaceholderItem
// Dependencies: [19, 21, 4560, 16676, 2]
// Exports: default

// Module 16682 (MemberRowPlaceholderItem)
import noopAll from "noop" /* 19 */;
import FormRowPlaceholderItemDefault from "FormRowPlaceholderItem" /* 16676 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

noopAll;
let closure_3 = createCacheKey.createStyles({ container: { paddingHorizontal: 0 } });
const result = require("set").fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default function MemberRowPlaceholderItem() {
  const tmp = callback();
  return jsx(FormRowPlaceholderItemDefault, { style: callback().container });
};
