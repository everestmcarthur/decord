// Module ID: 16801
// Function ID: 16802
// Name: View
// Dependencies: [17, 1115, 16802, 2]

// Module 16801 (View)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 16802 */;
import set from "set" /* 1115 */;

let View = get_ActivityIndicator.View;
if (set.isAndroid()) {
  View = __INTERNAL_VIEW_CONFIGDefault;
}
const result = set.fileFinishedImporting("modules/visual_effect_view/native/VisualEffectViewTarget.tsx");

export default View;
