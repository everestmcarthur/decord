// Module ID: 15279
// Function ID: 15280
// Name: ResubscribedAlert
// Dependencies: [19, 17, 21, 4606, 576, 5045, 1114, 15280, 1178, 4602, 2]
// Exports: default

// Module 15279 (ResubscribedAlert)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import Text_Text from "Text/Text" /* 4602 */;
import common_AlertDefault from "common/Alert" /* 5045 */;
import _modDef15280 from "module_15280" /* 15280 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4606);
let obj2 = { container: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL }, body: { alignItems: "center", textAlign: "center" }, centerText: { textAlign: "center" }, headerImage: { width: 87, height: 87 } };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/manage_subscriptions/ResubscribedAlert.tsx");

export default function ResubscribedAlert(onClose) {
  const tmp = closure_7();
  const obj = { confirmText: null, onConfirm: null, style: null, children: null };
  const intl = util.intl;
  obj.confirmText = intl.string(util.t["NX+WJN"]);
  obj.onConfirm = onClose.onClose;
  obj.style = tmp.container;
  const obj2 = { style: tmp.body, children: null };
  const tmp2 = common_AlertDefault;
  const items = [hasOwnProperty(React4, { source: _modDef15280, style: tmp.headerImage }), hasOwnProperty(native.Spacer, { size: 27 }), , , ];
  const obj4 = { variant: "text-lg/semibold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(util.t.oPV2cy);
  items[2] = hasOwnProperty(Text_Text.Text, obj4);
  items[3] = hasOwnProperty(native.Spacer, { size: 12 });
  const obj5 = { variant: "text-md/normal", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl3 = util.intl;
  obj5.children = intl3.string(util.t.DdRizV);
  items[4] = hasOwnProperty(Text_Text.Text, obj5);
  obj2.children = items;
  obj.children = timestampProducer(React3, obj2);
  return hasOwnProperty(tmp2, obj);
};
