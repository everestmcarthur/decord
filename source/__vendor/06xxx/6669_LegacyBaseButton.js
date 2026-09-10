// Module ID: 6669
// Function ID: 6670
// Name: LegacyBaseButton
// Dependencies: [6670, 6671, 6678, 6782, 6784, 6785, 6787, 6799, 6800, 6806, 6783, 6709, 6707, 6694, 6789, 6710, 6706, 6711, 6705, 6807, 6808, 6695, 6809, 6675]

// Module 6669 (LegacyBaseButton)
import _mod6675 from "module_6675" /* 6675 */;
import baseGestureHandlerProps from "baseGestureHandlerProps" /* 6694 */;
import tapGestureHandlerProps from "tapGestureHandlerProps" /* 6695 */;
import managePanProps from "managePanProps" /* 6705 */;
import longPressGestureHandlerProps from "longPressGestureHandlerProps" /* 6706 */;
import _mod6707 from "module_6707" /* 6707 */;
import flingGestureHandlerProps from "flingGestureHandlerProps" /* 6709 */;
import _mod6710 from "module_6710" /* 6710 */;
import nativeViewGestureHandlerProps from "nativeViewGestureHandlerProps" /* 6711 */;
import _mod6782 from "module_6782" /* 6782 */;
import _modDef6783 from "module_6783" /* 6783 */;
import LegacyScrollView from "LegacyScrollView" /* 6784 */;
import GestureHandlerRootViewDefault from "GestureHandlerRootView" /* 6785 */;
import _modDef6787 from "module_6787" /* 6787 */;
import GestureObjects from "GestureObjects" /* 6789 */;
import LegacyText from "LegacyText" /* 6799 */;
import TouchableHighlight from "TouchableHighlight" /* 6800 */;
import Directions from "Directions" /* 6806 */;
import pinchHandlerName from "pinchHandlerName" /* 6807 */;
import rotationHandlerName from "rotationHandlerName" /* 6808 */;
import PointerType from "PointerType" /* 6809 */;
import module_6670 from "module_6670" /* 6670 */;
import initialize_mod from "module_6671" /* 6671 */;

const require = globalThis.__r;

let initialize = initialize_mod;
initialize = initialize.initialize();
for (const key10019 in require("BaseButton")) {
  arg5[key10019] = require("BaseButton")[key10019];
  continue;
}

export const LegacyBaseButton = _mod6782.LegacyBaseButton;
export const LegacyBorderlessButton = _mod6782.LegacyBorderlessButton;
export const LegacyRawButton = _mod6782.LegacyRawButton;
export const LegacyRectButton = _mod6782.LegacyRectButton;
export const LegacyDrawerLayoutAndroid = LegacyScrollView.LegacyDrawerLayoutAndroid;
export const LegacyFlatList = LegacyScrollView.LegacyFlatList;
export const LegacyRefreshControl = LegacyScrollView.LegacyRefreshControl;
export const LegacyScrollView = LegacyScrollView.LegacyScrollView;
export const LegacySwitch = LegacyScrollView.LegacySwitch;
export const LegacyTextInput = LegacyScrollView.LegacyTextInput;
export const GestureHandlerRootView = GestureHandlerRootViewDefault;
export const LegacyPressable = _modDef6787;
export const LegacyText = LegacyText.LegacyText;
export const TouchableHighlight = TouchableHighlight.TouchableHighlight;
export const TouchableNativeFeedback = TouchableHighlight.TouchableNativeFeedback;
export const TouchableOpacity = TouchableHighlight.TouchableOpacity;
export const TouchableWithoutFeedback = TouchableHighlight.TouchableWithoutFeedback;
export const Directions = Directions.Directions;
export const legacy_createNativeWrapper = _modDef6783;
export const FlingGestureHandler = flingGestureHandlerProps.FlingGestureHandler;
export const ForceTouchGestureHandler = _mod6707.ForceTouchGestureHandler;
export const MouseButton = baseGestureHandlerProps.MouseButton;
export const Gesture = GestureObjects.GestureObjects;
export const HoverEffect = _mod6710.HoverEffect;
export const LongPressGestureHandler = longPressGestureHandlerProps.LongPressGestureHandler;
export const NativeViewGestureHandler = nativeViewGestureHandlerProps.NativeViewGestureHandler;
export const PanGestureHandler = managePanProps.PanGestureHandler;
export const PinchGestureHandler = pinchHandlerName.PinchGestureHandler;
export const RotationGestureHandler = rotationHandlerName.RotationGestureHandler;
export const TapGestureHandler = tapGestureHandlerProps.TapGestureHandler;
export const PointerType = PointerType.PointerType;
export const State = _mod6675.State;
