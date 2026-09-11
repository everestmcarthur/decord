// Module ID: 4959
// Function ID: 4960
// Name: enableScreens
// Dependencies: [4960, 4961, 4975, 4976, 4985, 4990, 4992, 4994, 4998, 5007, 5005, 5001, 4983, 4966, 5009]

// Module 4959 (enableScreens)
import get_synchronousScreenUpdatesEnabled from "get synchronousScreenUpdatesEnabled" /* 4966 */;
import _mod4975 from "module_4975" /* 4975 */;
import _mod4976 from "module_4976" /* 4976 */;
import _mod4983 from "module_4983" /* 4983 */;
import ScreenStackHeaderSubview from "ScreenStackHeaderSubview" /* 4985 */;
import SearchBarDefault from "SearchBar" /* 4990 */;
import ScreenContainerDefault from "ScreenContainer" /* 4992 */;
import ScreenStackDefault from "ScreenStack" /* 4994 */;
import _modDef4998 from "module_4998" /* 4998 */;
import ScreenContentWrapperDefault from "ScreenContentWrapper" /* 5001 */;
import ScreenFooterDefault from "ScreenFooter" /* 5005 */;
import FullWindowOverlayDefault from "FullWindowOverlay" /* 5007 */;
import _modDef5009 from "module_5009" /* 5009 */;
import RNSModule from "RNSModule" /* 4960 */;

const require = globalThis.__r;
const _modDef4976 = _mod4976;

for (const key10015 in require("Tabs")) {
  arg5[key10015] = require("Tabs")[key10015];
  continue;
}

export const enableScreens = _mod4975.enableScreens;
export const enableFreeze = _mod4975.enableFreeze;
export const screensEnabled = _mod4975.screensEnabled;
export const freezeEnabled = _mod4975.freezeEnabled;
export const Screen = _modDef4976;
export const InnerScreen = _mod4976.InnerScreen;
export const ScreenContext = _mod4976.ScreenContext;
export const ScreenStackHeaderConfig = ScreenStackHeaderSubview.ScreenStackHeaderConfig;
export const ScreenStackHeaderSubview = ScreenStackHeaderSubview.ScreenStackHeaderSubview;
export const ScreenStackHeaderLeftView = ScreenStackHeaderSubview.ScreenStackHeaderLeftView;
export const ScreenStackHeaderCenterView = ScreenStackHeaderSubview.ScreenStackHeaderCenterView;
export const ScreenStackHeaderRightView = ScreenStackHeaderSubview.ScreenStackHeaderRightView;
export const ScreenStackHeaderBackButtonImage = ScreenStackHeaderSubview.ScreenStackHeaderBackButtonImage;
export const ScreenStackHeaderSearchBarView = ScreenStackHeaderSubview.ScreenStackHeaderSearchBarView;
export const SearchBar = SearchBarDefault;
export const ScreenContainer = ScreenContainerDefault;
export const ScreenStack = ScreenStackDefault;
export const ScreenStackItem = _modDef4998;
export const FullWindowOverlay = FullWindowOverlayDefault;
export const ScreenFooter = ScreenFooterDefault;
export const ScreenContentWrapper = ScreenContentWrapperDefault;
export const isSearchBarAvailableForCurrentPlatform = _mod4983.isSearchBarAvailableForCurrentPlatform;
export const executeNativeBackPress = _mod4983.executeNativeBackPress;
export const compatibilityFlags = get_synchronousScreenUpdatesEnabled.compatibilityFlags;
export const featureFlags = get_synchronousScreenUpdatesEnabled.featureFlags;
export const useTransitionProgress = _modDef5009;
