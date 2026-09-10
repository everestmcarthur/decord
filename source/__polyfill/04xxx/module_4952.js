// Module ID: 4952
// Function ID: 4953
// Dependencies: [17, 106, 65]

// Module 4952
import _mod17 from "module_17" /* 17 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const codegenNativeComponent = _mod17.codegenNativeComponent;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSScreenStack", directEventTypes: { topFinishTransitioning: { registrationName: "onFinishTransitioning" } }, validAttributes: null };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onFinishTransitioning: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = { iosPreventReattachmentOfDismissedScreens: true };

export default module_65.get("RNSScreenStack", () => obj);
export { __INTERNAL_VIEW_CONFIG };
