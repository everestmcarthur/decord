// Module ID: 17658
// Function ID: 17659
// Name: VoicePanelDrawerToggleButton
// Dependencies: [19, 21, 4756, 576, 17637, 17623, 17638, 5801, 11418, 13830, 2]
// Exports: default

// Module 17658 (VoicePanelDrawerToggleButton)
import nativeDefault from "native" /* 576 */;
import NativeViewDefault from "NativeView" /* 5801 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 17623 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17637 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 17638 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { circle: null, iconContainer: null };
let size = { width: "100%", height: "100%", borderRadius: nativeDefault.radii.round };
obj2.circle = size;
obj2.iconContainer = { position: "absolute", justifyContent: "center", alignItems: "center", width: "100%", height: "100%" };
let closure_5 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelDrawerToggleButton.tsx");

export default function VoicePanelDrawerToggleButton(arg0) {
  ({ props, openTab, wrapperSpecs } = arg0);
  const tmp = closure_5();
  const voicePanelButtonStyles = VoicePanelStyles.useVoicePanelButtonStyles(wrapperSpecs);
  ({ isDrawerOpen, handlePress, accessibilityLabel } = useDrawerToggleDefault(openTab));
  const element = { onPress: handlePress, props, accessibilityLabel, children: null };
  const tmp5 = useDrawerToggleDefault(openTab);
  const tmp6 = React4;
  const obj2 = { style: null };
  const items = [tmp.circle, { backgroundColor: voicePanelButtonStyles.iconBg.backgroundColor }];
  obj2.style = items;
  const items1 = [React3(NativeViewDefault, obj2), ];
  const obj3 = { style: tmp.iconContainer, children: null };
  const tmp7 = VoicePanelAnimatedButtonWrapperDefault;
  if (isDrawerOpen) {
    let ChevronSmallUpIcon = tmp2(11418).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp2(13830).ChevronSmallUpIcon;
  }
  obj3.children = React3(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = React3(NativeViewDefault, obj3);
  element.children = items1;
  return tmp6(tmp7, element);
};
