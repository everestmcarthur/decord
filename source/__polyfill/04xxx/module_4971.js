// Module ID: 4971
// Function ID: 4972
// Dependencies: [17, 81, 26, 106, 65]

// Module 4971
import _mod17 from "module_17" /* 17 */;
import _mod26 from "module_26" /* 26 */;
import resolveAssetSource_mod from "resolveAssetSource" /* 81 */;
import weakSet from "weakSet" /* 106 */;
import module_65 from "module_65" /* 65 */;

const codegenNativeComponent = _mod17.codegenNativeComponent;
const __INTERNAL_VIEW_CONFIG = { uiViewClassName: "RNSTabsScreen", directEventTypes: { topLifecycleStateChange: { registrationName: "onLifecycleStateChange" }, topWillAppear: { registrationName: "onWillAppear" }, topDidAppear: { registrationName: "onDidAppear" }, topWillDisappear: { registrationName: "onWillDisappear" }, topDidDisappear: { registrationName: "onDidDisappear" } }, validAttributes: null };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
const obj2 = { isFocused: true, tabKey: true, title: true, isTitleUndefined: true, badgeValue: true, tabBarItemTestID: true, tabBarItemAccessibilityLabel: true, orientation: true, drawableIconResourceName: true, imageIconResource: { process: resolveAssetSource }, tabBarItemBadgeTextColor: _mod26.colorAttribute, tabBarItemBadgeBackgroundColor: _mod26.colorAttribute, standardAppearance: true, scrollEdgeAppearance: true, iconType: true, iconImageSource: null, iconResourceName: true, selectedIconImageSource: null, selectedIconResourceName: true, systemItem: true, specialEffects: true, overrideScrollViewContentInsetAdjustmentBehavior: true, bottomScrollEdgeEffect: true, leftScrollEdgeEffect: true, rightScrollEdgeEffect: true, topScrollEdgeEffect: true, userInterfaceStyle: true };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj2.iconImageSource = { process: resolveAssetSource };
let resolveAssetSource = resolveAssetSource_mod;
if ("default" in resolveAssetSource) {
  resolveAssetSource = resolveAssetSource.default;
}
obj2.selectedIconImageSource = { process: resolveAssetSource };
const merged = Object.assign(weakSet.ConditionallyIgnoredEventHandlers({ onLifecycleStateChange: true, onWillAppear: true, onDidAppear: true, onWillDisappear: true, onDidDisappear: true }));
__INTERNAL_VIEW_CONFIG.validAttributes = obj2;

export default module_65.get("RNSTabsScreen", () => obj);
export { __INTERNAL_VIEW_CONFIG };
