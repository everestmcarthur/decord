// Module ID: 9713
// Function ID: 9714
// Name: EditGuildEventModalNavbar
// Dependencies: [32, 19, 17, 21, 4560, 9710, 1369, 7123, 4556, 1114, 7377, 6992, 2]
// Exports: default

// Module 9713 (EditGuildEventModalNavbar)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import _modDef6992 from "module_6992" /* 6992 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7123 */;
import HeaderActionButton from "HeaderActionButton" /* 7377 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9710 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28, textTransform: "uppercase" }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  screen = screen.screen;
  const tmp = closure_7();
  if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [1, 3];
  } else if (tmp2(9710).EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (tmp2(9710).EditGuildEventScreens.PREVIEW === screen) {
    items = [3, 3];
  } else {
    tmp2(1369).assertNever(screen);
    const tmp2Result = tmp2(1369);
  }
  [tmp6, tmp7] = items;
  const obj = { top: true, style: tmp.header, children: null };
  const items1 = [hasOwnProperty(View, { style: tmp.buttonContainer }), , ];
  const obj3 = { style: tmp.headerTitle, variant: "text-xs/bold", color: "text-default", children: null };
  const intl = tmp2(1114).intl;
  obj3.children = intl.format(util.t["42HaFY"], { step: tmp6, total: tmp7 });
  items1[1] = hasOwnProperty(Text_Text.Text, obj3);
  const obj4 = { style: tmp.buttonContainer, children: null };
  const obj5 = { accessibilityLabel: null, onPress: null, source: null, style: null };
  const intl2 = tmp2(1114).intl;
  obj5.accessibilityLabel = intl2.string(util.t.cpT0Cq);
  obj5.onPress = screen.onClose;
  obj5.source = _modDef6992;
  obj5.style = tmp.rightButton;
  obj4.children = hasOwnProperty(HeaderActionButton.HeaderActionButton, obj5);
  items1[2] = hasOwnProperty(View, obj4);
  obj.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj);
};
