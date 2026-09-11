// Module ID: 17287
// Function ID: 17288
// Name: VoicePanelDrawerToggleButton
// Dependencies: [19, 21, 4606, 576, 17266, 17252, 17267, 5640, 11248, 13626, 2]
// Exports: default

// Module 17287 (VoicePanelDrawerToggleButton)
import nativeDefault from "native" /* 576 */;
import NativeViewDefault from "NativeView" /* 5640 */;
import useDrawerToggleDefault from "useDrawerToggle" /* 17252 */;
import VoicePanelStyles from "VoicePanelStyles" /* 17266 */;
import VoicePanelAnimatedButtonWrapperDefault from "VoicePanelAnimatedButtonWrapper" /* 17267 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4606);
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
    let ChevronSmallUpIcon = tmp2(11248).ChevronSmallDownIcon;
  } else {
    ChevronSmallUpIcon = tmp2(13626).ChevronSmallUpIcon;
  }
  obj3.children = React3(ChevronSmallUpIcon, { color: voicePanelButtonStyles.iconFill.color });
  items1[1] = React3(NativeViewDefault, obj3);
  element.children = items1;
  return tmp6(tmp7, element);
};
