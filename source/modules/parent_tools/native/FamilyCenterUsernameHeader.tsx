// Module ID: 14947
// Function ID: 14948
// Name: FamilyCenterUsernameHeader
// Dependencies: [19, 17, 21, 4607, 4451, 4603, 2]
// Exports: default

// Module 14947 (FamilyCenterUsernameHeader)
import UserUtilsDefault from "UserUtils" /* 4451 */;
import Text_Text from "Text/Text" /* 4603 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4607);
let closure_6 = createStyles.createStyles({ container: { justifyContent: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterUsernameHeader.tsx");

export default function FamilyCenterUsernameHeader(user) {
  user = user.user;
  const tmp = closure_6();
  const name = UserUtilsDefault.useName(user);
  const obj3 = { style: tmp.container, children: null };
  const combined = " (@" + UserUtilsDefault.getUserTag(user, { decoration: "never" }) + ")";
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", lineClamp: 1, children: null };
  const items = [name, React4(Text_Text.Text, { variant: "text-md/medium", color: "text-muted", lineClamp: 1, children: combined })];
  obj4.children = items;
  obj3.children = hasOwnProperty(Text_Text.Text, obj4);
  return React4(View, obj3);
};
