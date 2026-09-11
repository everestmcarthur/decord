// Module ID: 4958
// Function ID: 4959
// Name: OverlayView
// Dependencies: [19, 17, 21, 1115, 4959, 5008, 2]
// Exports: TransitionGroupOverlayView

// Module 4958 (OverlayView)
import _modDef5008 from "module_5008" /* 5008 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
let View = get_ActivityIndicator.View;
const StyleSheet = get_ActivityIndicator.StyleSheet;
const jsx = fn(21).jsx;
let PlatformUtils = fn(1115);
let FullWindowOverlay = View;
if (PlatformUtils.isIOS()) {
  FullWindowOverlay = fn(4959).FullWindowOverlay;
}
PlatformUtils = fn(1115);
if (PlatformUtils.isIOS()) {
  View = _modDef5008;
}
const size = fn(2);
const result = size.fileFinishedImporting("design/void/OverlayView/native/OverlayView.tsx");

export default FullWindowOverlay;
export const TransitionGroupOverlayView = function TransitionGroupOverlayView(children) {
  children = children.children;
  const merged = Object.assign(children, Object.assign({ children: 0 }));
  let tmp2 = null;
  if (Array.isArray(children)) {
    tmp2 = null;
    if (children.length > 0) {
      const obj = { style: StyleSheet.absoluteFill, children: null };
      const obj2 = {};
      const merged1 = Object.assign(merged);
      obj2.children = children;
      obj.children = <View />;
      tmp2 = <FullWindowOverlay style={StyleSheet.absoluteFill}>{null}</FullWindowOverlay>;
    }
  }
  return tmp2;
};
export const NonExpandingOverlayView = View;
