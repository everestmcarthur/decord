// Module ID: 6847
// Function ID: 6848
// Name: GestureObjects
// Dependencies: [6848, 6849, 6850, 6851, 6852, 6853, 6854, 6855, 6856, 6768, 6747]

// Module 6847 (GestureObjects)
import _mod6747 from "module_6747" /* 6747 */;
import _mod6768 from "module_6768" /* 6768 */;
import _mod6848 from "module_6848" /* 6848 */;
import _mod6849 from "module_6849" /* 6849 */;
import _mod6850 from "module_6850" /* 6850 */;
import _mod6851 from "module_6851" /* 6851 */;
import _mod6852 from "module_6852" /* 6852 */;
import _mod6853 from "module_6853" /* 6853 */;
import _mod6854 from "module_6854" /* 6854 */;
import _mod6855 from "module_6855" /* 6855 */;
import _mod6856 from "module_6856" /* 6856 */;

require = arg1;
const dependencyMap = arg6;

export const GestureObjects = {
  Tap() {
    const tapGesture = new _mod6848.TapGesture();
    return tapGesture;
  },
  Pan() {
    const panGesture = new _mod6849.PanGesture();
    return panGesture;
  },
  Pinch() {
    const pinchGesture = new _mod6850.PinchGesture();
    return pinchGesture;
  },
  Rotation() {
    const rotationGesture = new _mod6851.RotationGesture();
    return rotationGesture;
  },
  Fling() {
    const flingGesture = new _mod6852.FlingGesture();
    return flingGesture;
  },
  LongPress() {
    const longPressGesture = new _mod6853.LongPressGesture();
    return longPressGesture;
  },
  ForceTouch() {
    const forceTouchGesture = new _mod6854.ForceTouchGesture();
    return forceTouchGesture;
  },
  Native() {
    const nativeGesture = new _mod6855.NativeGesture();
    return nativeGesture;
  },
  Manual() {
    const manualGesture = new _mod6856.ManualGesture();
    return manualGesture;
  },
  Hover() {
    const hoverGesture = new _mod6768.HoverGesture();
    return hoverGesture;
  },
  Race() {
    const items = [...arguments];
    return _mod6747.ComposedGesture(...items);
  },
  Simultaneous() {
    const items = [...arguments];
    return _mod6747.SimultaneousGesture(...items);
  },
  Exclusive() {
    const items = [...arguments];
    return _mod6747.ExclusiveGesture(...items);
  }
};
