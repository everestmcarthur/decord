// Module ID: 16719
// Function ID: 16720
// Name: MemberRowPlaceholder
// Dependencies: [19, 21, 4574, 16713, 2]
// Exports: default

// Module 16719 (MemberRowPlaceholder)
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 16713 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4574);
let closure_3 = createStyles.createStyles({ container: { paddingHorizontal: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default function MemberRowPlaceholderItem() {
  const tmp = closure_3();
  return jsx(FormRowPlaceholderDefault, { style: closure_3().container });
};
