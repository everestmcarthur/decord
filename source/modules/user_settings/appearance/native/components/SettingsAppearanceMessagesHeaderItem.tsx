// Module ID: 15323
// Function ID: 15324
// Name: SettingsAppearanceMessagesHeaderItem
// Dependencies: [19, 17, 21, 4574, 576, 4570, 1114, 2]
// Exports: default

// Module 15323 (SettingsAppearanceMessagesHeaderItem)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4570 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4574);
let obj2 = { messagesHeaderContainer: { flexDirection: "row", gap: nativeDefault.space.PX_12, alignItems: "center", marginHorizontal: nativeDefault.space.PX_24 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/appearance/native/components/SettingsAppearanceMessagesHeaderItem.tsx");

export default function MessagesHeaderItem(animatedStyles) {
  const obj = { style: closure_4().messagesHeaderContainer, children: null };
  const obj2 = { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.OIgYlQ);
  obj.children = jsx(Text_Text.Text, { animated: true, style: animatedStyles.animatedStyles.textNormal, variant: "text-lg/bold", children: null });
  return <View style={closure_4().messagesHeaderContainer}>{null}</View>;
};
