// Module ID: 7050
// Function ID: 7051
// Name: AuthNavbarPlaceholder
// Dependencies: [19, 21, 4607, 576, 5676, 2]
// Exports: default

// Module 7050 (AuthNavbarPlaceholder)
import nativeDefault from "native" /* 576 */;
import NavigatorHeader from "NavigatorHeader" /* 5676 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
const obj2 = { navBar: { backgroundColor: nativeDefault.unsafe_rawColors.TRANSPARENT, borderBottomWidth: 0 } };
let closure_3 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/atoms/AuthNavbarPlaceholder.tsx");

export default function AuthNavbarPlaceholder() {
  const tmp = closure_3();
  return jsx(NavigatorHeader.FauxHeader, { style: closure_3().navBar, children: null });
};
