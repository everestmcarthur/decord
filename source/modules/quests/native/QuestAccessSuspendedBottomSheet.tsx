// Module ID: 15122
// Function ID: 15123
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 21, 4527, 15121, 11914, 10235, 1114, 4975, 2]
// Exports: default

// Module 15122 (QuestAccessSuspendedBottomSheet)
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Button from "Button" /* 4975 */;
import PromoSheet from "PromoSheet" /* 10235 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = React.useCallback(() => {
    callback2(4527).hideActionSheet(callback(15121).ACTION_SHEET_KEY);
    const obj = callback2(4527);
    callback(11914).openAccountStanding();
  }, []);
  let obj = { title: null, description: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.WfwodX);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.I27WXW);
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(getSystemLocale.t.hvVgAZ);
  obj[4] = callback;
  obj[2] = jsx(Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};
