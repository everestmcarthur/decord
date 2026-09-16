// Module ID: 10118
// Function ID: 10119
// Name: UserSettingsVoice
// Dependencies: [19, 17, 10119, 10120, 21, 4638, 5773, 10121, 5058, 10122, 10124, 4634, 1115, 10128, 10129, 10131, 7233, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 10118 (UserSettingsVoice)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4634 */;
import Stack_Stack from "Stack/Stack" /* 5058 */;
import TableRowGroup from "TableRowGroup" /* 5773 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7233 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10121 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 10122 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 10128 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 10129 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 10131 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(10119).isMobileOverlaySupported;
const guideURL = fn(10120).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4638);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = closure_8();
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  const obj2 = { style: tmp.container, children: null };
  const items = [timestampProducer(UserSettingsVoiceInputOptionsDefault, {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(10124), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1115).intl;
  obj3.children = intl.format(util.t["V+B3FH"], { guideURL });
  items[2] = timestampProducer(Text_Text.Text, obj3);
  items[3] = timestampProducer(UserSettingsSoundboardVolumeDefault, {});
  const obj4 = { guideURL };
  const tmp5 = View;
  const tmp6 = React5;
  const obj5 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && timestampProducer(UserSettingsVoiceOverlayDefault, {});
  items[5] = timestampProducer(UserSettingsVoiceProcessingDefault, {});
  items[6] = timestampProducer(common_SafeAreaView.SafeAreaPaddingView, { bottom: true });
  obj5.children = items;
  obj2.children = tmp6(Stack_Stack.Stack, obj5);
  return timestampProducer(tmp5, obj2);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return timestampProducer(TableRowGroup.TableRowGroup, {});
};
