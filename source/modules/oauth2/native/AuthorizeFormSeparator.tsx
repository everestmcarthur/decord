// Module ID: 9455
// Function ID: 9456
// Name: AuthorizeFormSeparator
// Dependencies: [17, 21, 4574, 576, 2]
// Exports: AuthorizeFormSeparator

// Module 9455 (AuthorizeFormSeparator)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 576 */;
import createStyles from "createStyles" /* 4574 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
const obj = { separator: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/oauth2/native/AuthorizeFormSeparator.tsx");

export const AuthorizeFormSeparator = function AuthorizeFormSeparator() {
  return <View style={closure_2().separator} />;
};
