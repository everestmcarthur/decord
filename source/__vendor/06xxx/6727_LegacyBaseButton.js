// Module ID: 6727
// Function ID: 6728
// Name: LegacyBaseButton
// Dependencies: [6728, 6729, 6736, 6840, 6842, 6843, 6845, 6857, 6858, 6864, 6841, 6767, 6765, 6752, 6847, 6768, 6764, 6769, 6763, 6865, 6866, 6753, 6867, 6733]

// Module 6727 (LegacyBaseButton)
import _mod6733 from "module_6733" /* 6733 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6752 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6753 */;
import managePanProps from "managePanProps" /* 6763 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6764 */;
import _mod6765 from "module_6765" /* 6765 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6767 */;
import _mod6768 from "module_6768" /* 6768 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6769 */;
import _mod6840 from "module_6840" /* 6840 */;
import _modDef6841 from "module_6841" /* 6841 */;
import LegacyScrollView from "LegacyScrollView" /* 6842 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6843 */;
import _modDef6845 from "module_6845" /* 6845 */;
import GestureObjects from "GestureObjects" /* 6847 */;
import LegacyText from "LegacyText" /* 6857 */;
import TouchableHighlight from "TouchableHighlight" /* 6858 */;
import Directions from "Directions" /* 6864 */;
import pinchHandlerName from "pinchHandlerName" /* 6865 */;
import rotationHandlerName from "rotationHandlerName" /* 6866 */;
import PointerType from "PointerType" /* 6867 */;
import module_6728 from "module_6728" /* 6728 */;
import initialize_mod from "module_6729" /* 6729 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6840.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6840.LegacyBorderlessButton;
export const LegacyRawButton = _mod6840.LegacyRawButton;
export const LegacyRectButton = _mod6840.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6845;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6841;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6765.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6768.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6733.State;
