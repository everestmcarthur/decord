// Module ID: 14977
// Function ID: 14978
// Name: ClipsSettingsScreen
// Dependencies: [19, 7975, 21, 11473, 14692, 2]
// Exports: default

// Module 14977 (ClipsSettingsScreen)
import _modDef14692 from "module_14692" /* 14692 */;
import closure_3 from "noop" /* 19 */;
import { MobileUserSettings } from "MobileUserSettings" /* 7975 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/user_settings/clips/native/SettingsClipsScreen.tsx");

export default function ClipsSettingsScreen() {
  const node = React.useMemo(() => {
    const items = [constants.CLIPS_OPT_OUT_OF_VOICE_RECORDING];
    const sections = [{ settings: items }];
    return callback(table[3]).createList({ sections });
  }, []);
  return jsx(_modDef14692, { node });
};
