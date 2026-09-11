// Module ID: 17957
// Function ID: 17958
// Name: LogOutDisclaimer
// Dependencies: [21, 14231, 4603, 1114, 2690, 6665, 2]
// Exports: default

// Module 17957 (LogOutDisclaimer)
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import _modDef2690 from "module_2690" /* 2690 */;
import Text_Text from "Text/Text" /* 4603 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6665 */;
import ModalDisclaimer from "ModalDisclaimer" /* 14231 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/safety_flows/native/LogOutDisclaimer.tsx");

export default function LogOutDisclaimer() {
  const obj = { children: null };
  const obj2 = { variant: "text-xs/medium", children: null };
  const intl = util.intl;
  obj2.children = intl.format(_modDef2690["0DHxym"], {
    handleLogOut() {
      AuthenticationActionCreatorsDefault.logout("safety_flows_enter_email_screen");
    }
  });
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/medium", children: null });
  return jsx(ModalDisclaimer.ModalDisclaimer, { children: null });
};
