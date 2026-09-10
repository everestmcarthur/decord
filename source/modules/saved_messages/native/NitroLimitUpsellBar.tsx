// Module ID: 12251
// Function ID: 12252
// Name: NitroLimitUpsellBar
// Dependencies: [17, 21, 4574, 576, 8621, 9995, 4570, 1114, 10002, 4989, 2]
// Exports: default

// Module 12251 (NitroLimitUpsellBar)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4570 */;
import WarningIcon from "WarningIcon" /* 8621 */;
import _modDef9995 from "module_9995" /* 9995 */;
import NitroUpsellButtonDefault from "NitroUpsellButton" /* 10002 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4574 */;
import size from "module_2" /* 2 */;

({ Image: c3, View: closure_4 } = get_ActivityIndicator);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = { container: { alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.md, flexDirection: "row", gap: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_16, marginHorizontal: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12 }, icon: { height: 20, width: 20 }, text: { flex: 1 } };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/saved_messages/native/NitroLimitUpsellBar.tsx");

export default function NitroLimitUpsellBar(isAtLimit) {
  isAtLimit = isAtLimit.isAtLimit;
  ({ text, onPress, loading } = isAtLimit);
  const tmp = closure_7();
  const obj = { style: tmp.container, children: null };
  if (isAtLimit) {
    const obj2 = { color: "text-feedback-warning", style: tmp.icon };
    let tmp4Result = tmp4(WarningIcon.WarningIcon, obj2);
    let tmp9 = tmp4;
  } else {
    const obj3 = { source: _modDef9995, style: tmp.icon };
    tmp4Result = tmp4(React3, obj3);
    tmp9 = tmp4;
  }
  const items = [tmp4Result, , ];
  const obj4 = { variant: "text-xs/medium", color: "text-default", style: tmp.text, children: null };
  const obj5 = { variant: "text-xs/bold", color: "text-brand", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.oW0eUd).toUpperCase();
  const items1 = [tmp9(Text_Text.Text, obj5), " \u00B7 ", text];
  obj4.children = items1;
  items[1] = timestampProducer(Text_Text.Text, obj4);
  if (isAtLimit) {
    let Button = NitroUpsellButtonDefault;
  } else {
    Button = tmp12(4989).Button;
  }
  const obj6 = { size: "sm", text: null, onPress: null, loading: null };
  const intl2 = tmp12(1114).intl;
  obj6.text = intl2.string(util.t["8x0jKT"]);
  obj6.onPress = onPress;
  obj6.loading = loading;
  items[2] = tmp9(Button, obj6);
  obj.children = items;
  return timestampProducer(React4, obj);
};
