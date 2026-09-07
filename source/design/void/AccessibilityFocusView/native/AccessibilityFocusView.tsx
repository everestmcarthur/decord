// Module ID: 14119
// Function ID: 14120
// Name: AccessibilityFocusView
// Dependencies: [19, 21, 14120, 2]
// Exports: default

// Module 14119 (AccessibilityFocusView)
import noopAll from "noop" /* 19 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 14120 */;
import { jsx } from "jsxProd" /* 21 */;

noopAll;
const result = require("set").fileFinishedImporting("design/void/AccessibilityFocusView/native/AccessibilityFocusView.tsx");

export default function AccessibilityFocusView(arg0) {
  ({ onAccessibilityFocus, onAccessibilityBlur } = arg0);
  const merged = Object.assign(arg0, Object.create(null));
  const obj = {};
  const merged1 = Object.assign(merged);
  obj.onAccessibilityFocus = onAccessibilityFocus;
  obj.onAccessibilityBlur = onAccessibilityBlur;
  return jsx(__INTERNAL_VIEW_CONFIGDefault, {});
};
