// Module ID: 17113
// Function ID: 17114
// Dependencies: [19, 21, 4560, 7150, 6627, 7123, 17114, 2]

// Module 17113
import BottomSheetModal from "BottomSheetModal" /* 6627 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 7123 */;
import Background from "Background" /* 7150 */;
import VoicePanelSettingsOverviewHeaderDefault from "VoicePanelSettingsOverviewHeader" /* 17114 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_4 = createCacheKey.createStyles({ wrapper: { gap: 24 } });
const memoResult = importAllResult.memo(function VoicePanelSettingsActionSheet(arg0) {
  ({ guildId, channelId } = arg0);
  let obj = { startExpanded: true, scrollable: true, children: null };
  obj = { children: null };
  obj = { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) };
  obj[0] = jsx(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) });
  obj[2] = jsx(BottomSheetModal.BottomSheetScrollView, { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) });
  return jsx(Background.BottomSheet, { bottom: true, style: callback().wrapper, children: jsx(VoicePanelSettingsOverviewHeaderDefault, { guildId, channelId }) });
});
const result = require("set").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default memoResult;
