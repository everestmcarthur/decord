// Module ID: 15864
// Function ID: 15865
// Name: UserSettingsDesignSystemSheets
// Dependencies: [32, 19, 17, 1074, 21, 4607, 7271, 7223, 9811, 7272, 5025, 6678, 7273, 4574, 5027, 1114, 10321, 5886, 5659, 4603, 2]
// Exports: default

// Module 15864 (UserSettingsDesignSystemSheets)
import util from "util" /* 1114 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4574 */;
import Text_Text from "Text/Text" /* 4603 */;
import Stack_Stack from "Stack/Stack" /* 5025 */;
import components_Button_Button from "components/Button/Button" /* 5027 */;
import Card from "Card" /* 5659 */;
import _modDef5886 from "module_5886" /* 5886 */;
import TextInput from "TextInput" /* 6678 */;
import BottomSheetTitleHeader from "BottomSheetTitleHeader" /* 7223 */;
import ActionSheet from "ActionSheet" /* 7271 */;
import ActionSheetRow from "ActionSheetRow" /* 7273 */;
import PromoSheet from "PromoSheet" /* 10321 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function DemoActionSheet() {
  [tmp2, tmp3] = noop.useState(false);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  const first = tmp4[0];
  const tmp6 = _slicedToArray(noop.useState("Header title"), 2);
  const first1 = tmp6[0];
  const tmp = _slicedToArray(noop.useState(false), 2);
  [tmp9, tmp10] = noop.useState("Header subtitle");
  require = tmp10;
  const tmp8 = _slicedToArray(noop.useState("Header subtitle"), 2);
  [tmp12, tmp13] = noop.useState("Reset");
  importDefault = tmp13;
  const obj = { title: first1, subtitle: null, leading: null, trailing: null };
  let tmp17;
  if ("" !== tmp9) {
    tmp17 = tmp9;
  }
  obj.subtitle = tmp17;
  let tmp14Result = first;
  if (first) {
    const obj2 = { onPress: NOOP, label: tmp12 };
    tmp14Result = tmp14(tmp15(9811).ActionSheetHeaderPressableText, obj2);
  }
  obj.leading = tmp14Result;
  let tmp14Result2 = tmp2;
  if (tmp2) {
    const obj3 = { onPress: NOOP };
    tmp14Result2 = tmp14(tmp15(7272).ActionSheetCloseButton, obj3);
  }
  const obj4 = { header: React5(BottomSheetTitleHeader.BottomSheetTitleHeader, obj), children: null };
  obj.trailing = tmp14Result2;
  const obj5 = { spacing: 24, children: null };
  const obj6 = { children: null };
  const items = [
    React5(TextInput.TextInput, { value: first1, onChange: tmp6[1], label: "Title" }),
    React5(TextInput.TextInput, {
      value: tmp9,
      onChange: tmp10,
      label: "Subtitle",
      maxLength: 100,
      isClearable: true,
      onClear() {
        return tmp10("");
      }
    })
  ];
  obj6.children = items;
  const items1 = [React6(Stack_Stack.Stack, obj6), , ];
  const obj8 = { hasIcons: false, children: null };
  const items2 = [React5(ActionSheetRow.ActionSheetSwitchRow, { value: first, onValueChange: tmp4[1], label: "Show Leading" }), React5(ActionSheetRow.ActionSheetSwitchRow, { value: tmp2, onValueChange: tmp3, label: "Show Trailing" })];
  obj8.children = items2;
  items1[1] = React6(ActionSheetRow.ActionSheetRow.Group, obj8);
  items1[2] = React5(TextInput.TextInput, {
    value: tmp12,
    onChange: tmp13,
    label: "Leading",
    isDisabled: !first,
    isClearable: true,
    onClear() {
      return tmp13("");
    }
  });
  obj5.children = items1;
  obj4.children = React6(Stack_Stack.Stack, obj5);
  return React5(ActionSheet.ActionSheet, obj4);
}
function showDemoPromoSheet() {
  ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(DemoPromoSheet), "promo-sheet-demo");
}
function DemoPromoSheet() {
  const obj = {
    size: "lg",
    onPress() {
      return ActionSheetActionCreatorsDefault.hideActionSheet("promo-sheet-demo");
    },
    text: null
  };
  const intl = util.intl;
  obj.text = intl.string(util.t.BddRzS);
  const obj2 = { graphic: null, gradientColor: "purple", title: "Here's a Promo Sheet", description: "You can use this to promote new features, products, or anything else you'd like!", actions: null };
  const obj3 = { type: "image", src: null, aspectRatio: "16/9" };
  const tmp = React5(components_Button_Button.Button, obj);
  obj3.src = { uri: _modDef5886 };
  obj2.graphic = obj3;
  obj2.actions = tmp;
  return React5(PromoSheet.PromoSheet, obj2);
}
const ScrollView = fn(17).ScrollView;
const NOOP = fn(1074).NOOP;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4607);
let closure_9 = createStyles.createStyles({ container: { padding: 16, alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemSheets.tsx");

export default function UserSettingsDesignSystemSheets() {
  const obj = { contentContainerStyle: closure_9().container, children: null };
  const obj2 = { children: null };
  const obj3 = { children: null };
  const obj4 = { children: null };
  const items = [
    React5(Text_Text.Text, { variant: "text-lg/bold", children: "Action Sheet with Title Header" }),
    React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "An action sheet with a centered title and subtitle, with optional leading and Trailing elements." }),
    React5(components_Button_Button.Button, {
      onPress() {
        ActionSheetActionCreatorsDefault.openLazy(() => Promise.resolve(closure_1_10), "demo-sheet");
      },
      text: "Show Action Sheet"
    })
  ];
  obj4.children = items;
  obj3.children = React6(Stack_Stack.Stack, obj4);
  const items1 = [React5(Card.Card, obj3), ];
  const obj6 = { children: null };
  const obj7 = { children: null };
  const items2 = [React5(Text_Text.Text, { variant: "text-lg/bold", children: "Promo Sheet" }), React5(Text_Text.Text, { variant: "text-md/medium", color: "text-subtle", children: "A sheet with an illustration, title, description, and actions." }), React5(components_Button_Button.Button, { onPress: showDemoPromoSheet, text: "Show Promo Sheet" })];
  obj7.children = items2;
  obj6.children = React6(Stack_Stack.Stack, obj7);
  items1[1] = React5(Card.Card, obj6);
  obj2.children = items1;
  obj.children = React6(Stack_Stack.Stack, obj2);
  return React5(ScrollView, obj);
};
