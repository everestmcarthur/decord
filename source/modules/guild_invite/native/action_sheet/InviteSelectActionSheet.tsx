// Module ID: 17886
// Function ID: 17887
// Name: InviteSelectActionSheet
// Dependencies: [19, 21, 4607, 576, 7224, 7223, 5737, 4574, 5740, 2]
// Exports: default

// Module 17886 (InviteSelectActionSheet)
import nativeDefault from "native" /* 576 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import TableRadioGroup from "TableRadioGroup" /* 5737 */;
import TableRadioRow from "TableRadioRow" /* 5740 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7223 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7224 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
const obj2 = { content: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/action_sheet/InviteSelectActionSheet.tsx");

export default function InviteSelectActionSheet(arg0) {
  ({ options, onChange: require } = arg0);
  ({ title, value } = arg0);
  const obj = { contentStyles: closure_4().content, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null };
  const tmp = closure_4();
  obj.children = jsx(TableRadioGroup.TableRadioGroup, {
    value,
    onChange(arg0) {
      require(arg0);
      ActionSheetActionCreatorsDefault.hideActionSheet();
    },
    hasIcons: false,
    children: options.map((value) => jsx(TableRadioRow.TableRadioRow, { value: value.value, label: value.label, accessibilityHint: value.descriptiveLabel }, "" + value.value))
  });
  return jsx(Sheet_BottomSheet.BottomSheet, { contentStyles: closure_4().content, header: jsx(BottomSheetTitleHeader.BottomSheetTitleHeader, { title }), children: null });
};
