// Module ID: 9739
// Function ID: 9740
// Name: EditGuildEventModalNavbar
// Dependencies: [32, 19, 17, 21, 4574, 9736, 1369, 7137, 4570, 1114, 7391, 7006, 2]
// Exports: default

// Module 9739 (EditGuildEventModalNavbar)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4570 */;
import _modDef7006 from "module_7006" /* 7006 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7137 */;
import HeaderActionButton from "HeaderActionButton" /* 7391 */;
import EditGuildEventUtils from "EditGuildEventUtils" /* 9736 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4574);
let closure_7 = createStyles.createStyles({ header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 4, paddingVertical: 8 }, headerTitle: { lineHeight: 28, textTransform: "uppercase" }, buttonContainer: { width: 60 }, rightButton: { marginLeft: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/native/components/EditGuildEventModalNavbar.tsx");

export default function EditGuildEventModalNavbar(screen) {
  screen = screen.screen;
  const tmp = closure_7();
  if (EditGuildEventUtils.EditGuildEventScreens.CHANNEL_SELECTOR === screen) {
    let items = [1, 3];
  } else if (tmp2(9736).EditGuildEventScreens.DETAILS === screen) {
    items = [2, 3];
  } else if (tmp2(9736).EditGuildEventScreens.PREVIEW === screen) {
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
  obj5.source = _modDef7006;
  obj5.style = tmp.rightButton;
  obj4.children = hasOwnProperty(HeaderActionButton.HeaderActionButton, obj5);
  items1[2] = hasOwnProperty(View, obj4);
  obj.children = items1;
  return timestampProducer(common_SafeAreaView.SafeAreaPaddingView, obj);
};
