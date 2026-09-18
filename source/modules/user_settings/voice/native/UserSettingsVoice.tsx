// Module ID: 10223
// Function ID: 10224
// Name: UserSettingsVoice
// Dependencies: [19, 17, 10224, 10225, 21, 4722, 5857, 10226, 5142, 10227, 10229, 4718, 1115, 10233, 10234, 10236, 7319, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 10223 (UserSettingsVoice)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4718 */;
import Stack_Stack from "Stack/Stack" /* 5142 */;
import TableRowGroup from "TableRowGroup" /* 5857 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7319 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10226 */;
import UserSettingsVoiceInputOptionsDefault from "UserSettingsVoiceInputOptions" /* 10227 */;
import UserSettingsSoundboardVolumeDefault from "UserSettingsSoundboardVolume" /* 10233 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 10234 */;
import UserSettingsVoiceProcessingDefault from "UserSettingsVoiceProcessing" /* 10236 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const isMobileOverlaySupported = fn(10224).isMobileOverlaySupported;
const guideURL = fn(10225).USER_SETTINGS_VOICE_GUILD_URL;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4722);
let closure_8 = createStyles.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = closure_8();
  let nonContextualStreamOutputPresent = MobileAudioOutputExperimentDefault.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  const obj2 = { style: tmp.container, children: null };
  const items = [timestampProducer(UserSettingsVoiceInputOptionsDefault, {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(10229), {});
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
