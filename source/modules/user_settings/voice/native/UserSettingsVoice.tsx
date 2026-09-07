// Module ID: 9984
// Function ID: 9985
// Name: UserSettingsVoice
// Dependencies: [19, 17, 9985, 9986, 21, 4560, 5687, 9987, 4973, 9988, 9990, 4556, 1114, 9994, 9995, 9997, 7123, 2]
// Exports: UserSettingsTableRowGroup, default

// Module 9984 (UserSettingsVoice)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import Text from "Text" /* 4556 */;
import Stack from "Stack" /* 4973 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5687 */;
import SafeAreaPaddingView from "SafeAreaPaddingView" /* 7123 */;
import apexExperimentDefault from "apexExperiment" /* 9987 */;
import handleInputModePressDefault from "handleInputModePress" /* 9988 */;
import SoundboardVolumeDefault from "SoundboardVolume" /* 9994 */;
import UserSettingsVoiceOverlayDefault from "UserSettingsVoiceOverlay" /* 9995 */;
import VoiceProcessingOptionsDefault from "VoiceProcessingOptions" /* 9997 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { isMobileOverlaySupported } from "getUserAgnosticState" /* 9985 */;
import { USER_SETTINGS_VOICE_GUILD_URL as closure_5 } from "combined" /* 9986 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
({ jsx: closure_6, jsxs: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { paddingHorizontal: 16 }, tableRow: { marginTop: 12 } });
const result = require("set").fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoice.tsx");

export default function UserSettingsVoice() {
  const tmp = callback2();
  let obj = apexExperimentDefault;
  let nonContextualStreamOutputPresent = obj.useConfig({ location: "NewUserSettingsVoice" }).nonContextualStreamOutputPresent;
  obj = { style: tmp.container, children: null };
  const items = [callback(handleInputModePressDefault, {}), , , , , , ];
  if (nonContextualStreamOutputPresent) {
    nonContextualStreamOutputPresent = tmp4(tmp2(9990), {});
  }
  items[1] = nonContextualStreamOutputPresent;
  obj = { style: tmp.tableRow, variant: "text-sm/medium", children: null };
  const intl = tmp7(1114).intl;
  obj[2] = intl.format(getSystemLocale.t["V+B3FH"], { guideURL: closure_5 });
  items[2] = callback(Text.Text, obj);
  items[3] = callback(SoundboardVolumeDefault, {});
  const obj2 = { spacing: 24, children: null };
  items[4] = isMobileOverlaySupported() && callback(UserSettingsVoiceOverlayDefault, {});
  items[5] = callback(VoiceProcessingOptionsDefault, {});
  items[6] = callback(SafeAreaPaddingView.SafeAreaPaddingView, { bottom: true });
  obj2[1] = items;
  obj[1] = closure_7(Stack.Stack, obj2);
  return callback(View, obj);
};
export const UserSettingsTableRowGroup = function UserSettingsTableRowGroup(arg0) {
  const merged = Object.assign(arg0);
  return callback(TableRowGroupTitle.TableRowGroup, {});
};
