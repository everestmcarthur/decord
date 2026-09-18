// Module ID: 17067
// Function ID: 17068
// Name: MemberRowPlaceholder
// Dependencies: [19, 21, 4722, 17061, 2]
// Exports: default

// Module 17067 (MemberRowPlaceholder)
import FormRowPlaceholderDefault from "FormRowPlaceholder" /* 17061 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(4722);
let closure_3 = createStyles.createStyles({ container: { paddingHorizontal: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/tabs/pages/placeholders/MemberRowPlaceholder.tsx");

export default function MemberRowPlaceholderItem() {
  const tmp = closure_3();
  return jsx(FormRowPlaceholderDefault, { style: closure_3().container });
};
