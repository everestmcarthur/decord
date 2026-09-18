// Module ID: 15768
// Function ID: 15769
// Name: UserSettingsDesignSystemExperimentalButtons
// Dependencies: [19, 17, 21, 4262, 576, 8908, 4973, 5687, 5613, 7052, 4508, 4975, 4556, 4271, 4987, 8601, 7381, 2]
// Exports: default

// Module 15768 (UserSettingsDesignSystemExperimentalButtons)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4262 */;
import native from "native" /* 4271 */;
import _modDef4508 from "module_4508" /* 4508 */;
import Text_Text from "Text/Text" /* 4556 */;
import Stack_Stack from "Stack/Stack" /* 4973 */;
import components_Button_Button from "components/Button/Button" /* 4975 */;
import LinearGradientDefault from "LinearGradient" /* 4987 */;
import _modDef5613 from "module_5613" /* 5613 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import _modDef7052 from "module_7052" /* 7052 */;
import _modDef7381 from "module_7381" /* 7381 */;
import RowButton from "RowButton" /* 8601 */;
import native2 from "native" /* 8908 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ScrollView: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemExperimentalButtons.tsx");

export default function UserSettingsDesignSystemExperimentalButtons() {
  const token = useToken.useToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const collapsibleFloatingActionButtonState = native2.useCollapsibleFloatingActionButtonState();
  const obj4 = { children: null };
  const obj5 = { onScroll: native2.useCollapsibleFloatingActionButtonScroll(collapsibleFloatingActionButtonState), children: null };
  const obj6 = { spacing: nativeDefault.space.PX_24, style: { paddingHorizontal: token }, children: null };
  const obj7 = { title: "Header Button", description: "A specialized version of the 'secondary-overlay' Button which functions as both a Header and a button.", hasIcons: false, children: null };
  const obj8 = { style: null, children: null };
  obj8.style = { alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
  const obj9 = { alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.BG_GRADIENT_CHROMA_GLOW_1, paddingVertical: nativeDefault.space.PX_48 };
  obj8.children = hasOwnProperty(native2.HeaderButton, {
    onPress() {

    },
    text: "Channel Name",
    icon: _modDef5613,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6
  });
  obj7.children = hasOwnProperty(React3, obj8);
  const items = [hasOwnProperty(TableRowGroup.TableRowGroup, obj7), , , , , , ];
  const obj11 = { title: "Input Button", description: "A specialized button which looks like a text field, but functions as a button.", hasIcons: false, children: null };
  const obj12 = { spacing: nativeDefault.space.PX_24, children: null };
  const obj10 = {
    onPress() {

    },
    text: "Channel Name",
    icon: _modDef5613,
    iconPosition: "end",
    accessibilityHint: "double-tap for more options",
    iconOpticalOffsetMargin: -6
  };
  const items1 = [
    hasOwnProperty(native2.InputButton, {
      onPress() {

      },
      size: "lg",
      text: "Search",
      icon: _modDef7052,
      isRound: true
    }),

  ];
  const obj13 = {
    onPress() {

    },
    size: "lg",
    text: "Search",
    icon: _modDef7052,
    isRound: true
  };
  items1[1] = hasOwnProperty(native2.InputButton, {
    onPress() {

    },
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: _modDef4508,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  });
  obj12.children = items1;
  obj11.children = timestampProducer(Stack_Stack.Stack, obj12);
  items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj11);
  const obj15 = { title: "Twin Buttons", description: "TwinButtons is a specialized layout component, which renders two text buttons horizontally next to each other. A horizontal layout for text buttons is often problematic, since internationalization and font size settings can easily render these buttons unreadable. But TwinButtons will force the two buttons to stack vertically under certain conditions to avoid these issues.", hasIcons: false, children: null };
  const obj16 = { children: null };
  const items2 = [
    hasOwnProperty(components_Button_Button.Button, {
      onPress() {

      },
      text: "Add Status"
    }),
    hasOwnProperty(components_Button_Button.Button, {
      onPress() {

      },
      text: "Edit Profile"
    })
  ];
  obj16.children = items2;
  obj15.children = timestampProducer(native2.TwinButtons, obj16);
  items[2] = hasOwnProperty(TableRowGroup.TableRowGroup, obj15);
  const obj19 = { title: "PressableScale", description: "If no button in our catelog of components is compatible with a particular design, then PressableScale can fill some gaps. It will apply the same onPress animation to a custom button.", hasIcons: false, children: null };
  const obj20 = { style: { padding: token }, children: null };
  const obj21 = {
    onPress() {

    },
    children: null
  };
  const obj14 = {
    onPress() {

    },
    size: "lg",
    text: "http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: _modDef4508,
    iconPosition: "end",
    accessibilityLabel: "Copy, http://discord.com/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  };
  const obj17 = {
    onPress() {

    },
    text: "Add Status"
  };
  const obj18 = {
    onPress() {

    },
    text: "Edit Profile"
  };
  obj21.children = hasOwnProperty(React3, { style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 }, children: hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }) });
  obj20.children = hasOwnProperty(native2.PressableScale, obj21);
  obj19.children = hasOwnProperty(React3, obj20);
  items[3] = hasOwnProperty(TableRowGroup.TableRowGroup, obj19);
  const obj22 = { style: { borderColor: "pink", borderWidth: 1, borderRadius: 8, padding: 12 }, children: hasOwnProperty(Text_Text.Text, { variant: "text-md/semibold", children: "This is a custom button" }) };
  items[4] = hasOwnProperty(TableRowGroup.TableRowGroup, { title: "Experimental Blur Background Row Button", description: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.", hasIcons: false, children: hasOwnProperty(React3, {}) });
  const obj24 = { theme: "darker", children: null };
  const obj25 = { style: { padding: 16 }, start: { x: 0, y: 0 }, end: { x: 1, y: 0 }, colors: ["red", "orange", "yellow", "green", "teal", "blue", "purple"], children: null };
  const obj23 = { title: "Experimental Blur Background Row Button", description: "Row Button Row Buttons are full-width, high-emphasis buttons that are used as primary CTAs in a page.", hasIcons: false, children: hasOwnProperty(React3, {}) };
  const tmp3 = LinearGradientDefault;
  obj25.children = hasOwnProperty(RowButton.RowButton, {
    icon: _modDef7381,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {

    }
  });
  obj24.children = hasOwnProperty(tmp3, obj25);
  items[5] = hasOwnProperty(native.ThemeContextProvider, obj24);
  const obj26 = {
    icon: _modDef7381,
    label: "Row Button",
    subLabel: "With a blur background",
    experimental_withBlurBackground: true,
    onPress() {

    }
  };
  items[6] = hasOwnProperty(TableRowGroup.TableRowGroup, { title: "Collapsible Floating Action Button", description: "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.", hasIcons: false, children: hasOwnProperty(React3, { style: { padding: 48 } }) });
  obj6.children = items;
  obj5.children = timestampProducer(Stack_Stack.Stack, obj6);
  const items3 = [hasOwnProperty(React4, obj5), ];
  const obj27 = { title: "Collapsible Floating Action Button", description: "A variation of the FloatingActionButton which will display some text until the user scrolls. We currently recommend the use of the FloatingActionButton over the CollapsibleFloatingActionButton, as a singular icon button without animation is more compact, understandable, and predictable.", hasIcons: false, children: hasOwnProperty(React3, { style: { padding: 48 } }) };
  items3[1] = hasOwnProperty(native2.CollapsibleFloatingActionButton, {
    icon: _modDef7381,
    onPress() {

    },
    positionBottom: 32,
    text: "Floating Action Button",
    state: collapsibleFloatingActionButtonState
  });
  obj4.children = items3;
  return timestampProducer(React3, obj4);
};
