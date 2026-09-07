// Module ID: 17002
// Function ID: 17003
// Name: jsx
// Dependencies: [21, 16759, 1115, 4417, 16525, 16911, 4431, 16927, 10083, 14170, 4910, 4273, 17003, 17009, 17042, 17051, 17224, 2]

// Module 17002 (jsx)
import updateAccessibilityAnnouncerLiveRegionMessage from "updateAccessibilityAnnouncerLiveRegionMessage" /* 4273 */;
import PortalKeyboardState from "PortalKeyboardState" /* 4431 */;
import getAlertModalItemKey from "getAlertModalItemKey" /* 4910 */;
import NotificationsDefault from "Notifications" /* 10083 */;
import getItemKey from "getItemKey" /* 14170 */;
import transitionGroupGetItemKey from "transitionGroupGetItemKey" /* 16759 */;
import BurstReactionAnimationContainer from "BurstReactionAnimationContainer" /* 16911 */;
import trackActionSheetImpressionDefault from "trackActionSheetImpression" /* 16927 */;
import FreezeAfterLayoutPipViewDefault from "FreezeAfterLayoutPipView" /* 17003 */;
import _modDef17009 from "module_17009" /* 17009 */;
import _modDef17042 from "module_17042" /* 17042 */;
import VoicePanelDefault from "VoicePanel" /* 17051 */;
import _modDef17224 from "module_17224" /* 17224 */;
import jsxProd from "jsxProd" /* 21 */;
import set from "set" /* 1115 */;
import importDefaultResult from "jsx" /* 16525 */;

({ jsx, jsxs } = jsxProd);
let closure_2 = jsx(transitionGroupGetItemKey.PortalKeyboardRenderer, {});
let obj = { lockKeys: ["external-pip"], children: null };
const tmp3 = set.isIOS() ? (() => {
  let tmp = null;
  if (!obj.useIsModalOpen()) {
    tmp = closure_2;
  }
  return tmp;
}) : (() => closure_2);
const items = [jsx(BurstReactionAnimationContainer.PictureInPictureGlobalContainer, {}), jsx(BurstReactionAnimationContainer.BurstReactionAnimationContainer, {}), jsx(BurstReactionAnimationContainer.MenuContainer, {}), jsx(PortalKeyboardState.PortalKeyboardHost, {}), <tmp3 />, jsx(BurstReactionAnimationContainer.ActionSheetContainer, { appEntryKey: "main" }), jsx(BurstReactionAnimationContainer.Alerts, {}), jsx(BurstReactionAnimationContainer.SoundPlayer, {}), jsx(trackActionSheetImpressionDefault, {}), jsx(NotificationsDefault, {}), jsx(getItemKey.ContextMenuContainer, {}), jsx(getAlertModalItemKey.AlertModalContainer, {}), jsx(BurstReactionAnimationContainer.ToastContainer, {})];
obj[1] = items;
let jsxResult = null;
if (set.isAndroid()) {
  jsxResult = jsx(updateAccessibilityAnnouncerLiveRegionMessage.AccessibilityAnnouncerLiveRegion, {});
}
const jsxsResult = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });
obj = { lockKeys: ["external-pip"], children: null };
const jsxResult1 = jsx(FreezeAfterLayoutPipViewDefault, {});
const items1 = [jsx(_modDef17009, {}), jsx(_modDef17042, {}), jsx(VoicePanelDefault, {}), jsx(_modDef17224, {})];
obj[1] = items1;
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/main_tabs_v2/native/AppComponents.tsx");

export const APP_EXTRA_COMPONENTS = jsxsResult;
export const APP_EXTRA_COMPONENTS_NEVER_FREEZE = jsxResult;
export const APP_EXTRA_COMPONENTS_EXTERNAL_PIP = jsxResult1;
export const APP_EXTRA_COMPONENTS_VOICE_AND_VIDEO = jsxs(importDefaultResult, { lockKeys: ["external-pip"], children: null });
