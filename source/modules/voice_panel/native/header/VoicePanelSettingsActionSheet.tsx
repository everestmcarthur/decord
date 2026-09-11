// Module ID: 17193
// Function ID: 17194
// Name: VoicePanelSettingsActionSheet
// Dependencies: [19, 21, 4607, 7224, 6699, 7197, 17194, 2]

// Module 17193 (VoicePanelSettingsActionSheet)
import BottomSheetModal from "BottomSheetModal" /* 6699 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7197 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 7224 */;
import VoicePanelSettingsOverviewDefault from "VoicePanelSettingsOverview" /* 17194 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4607);
let closure_4 = createStyles.createStyles({ wrapper: { gap: 24 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelSettingsActionSheet.tsx");

export default noop.memo(function VoicePanelSettingsActionSheet(arg0) {
  ({ guildId, channelId } = arg0);
  const obj = { startExpanded: true, scrollable: true, children: null };
  const obj2 = { children: null };
  const tmp = closure_4();
  obj2.children = jsx(common_SafeAreaView.SafeAreaPaddingView, { bottom: true, style: closure_4().wrapper, children: jsx(VoicePanelSettingsOverviewDefault, { guildId, channelId }) });
  obj.children = jsx(BottomSheetModal.BottomSheetScrollView, { children: null });
  return jsx(Sheet_BottomSheet.BottomSheet, { startExpanded: true, scrollable: true, children: null });
});
