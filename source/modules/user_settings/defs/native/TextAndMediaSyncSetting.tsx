// Module ID: 15474
// Function ID: 15475
// Name: toggle
// Dependencies: [1184, 7975, 504, 11473, 1114, 9363, 2]

// Module 15474 (toggle)
import initialize from "initialize" /* 504 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import saveGuildFoldersDefault from "saveGuildFolders" /* 9363 */;
import closure_2 from "initialize" /* 1184 */;
import createToggle from "createToggle" /* 11473 */;

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["3340dY"]);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CHAT,
  useValue: function useTextAndMediaSyncSettingValue() {
    const items = [closure_2];
    return initialize.useStateFromStores(items, () => closure_2.shouldSync("text"));
  },
  onValueChange: saveGuildFoldersDefault.setShouldSyncTextSettings
};
createToggle = createToggle.createToggle(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/TextAndMediaSyncSetting.tsx");

export default createToggle;
