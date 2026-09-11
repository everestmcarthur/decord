// Module ID: 10071
// Function ID: 10072
// Name: UserSettingsVoice
// Dependencies: [19, 17, 10072, 10073, 21, 4607, 5739, 10074, 5025, 10075, 10077, 4603, 1114, 10081, 10082, 10084, 7197, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 10071 (UserSettingsVoice)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4603 */;
import Stack_Stack from "Stack/Stack" /* 5025 */;
import TableRowGroup from "TableRowGroup" /* 5739 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7197 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10074 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 10075 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 10081 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 10082 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 10084 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(10072).isMobileOverlaySupported;
const guideURL = fn(10073).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4607);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = closure_8();
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  const obj2 = { style: tmp.container, children: null };
  const items = [timestampProducer(UserSettingsVoiceInputOptionsDefault, {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(10077), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  const obj3 = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1114).intl;
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
