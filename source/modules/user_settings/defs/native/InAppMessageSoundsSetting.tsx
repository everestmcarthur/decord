// Module ID: 15498
// Function ID: 15499
// Name: toggle
// Dependencies: [10109, 7975, 11473, 1114, 1608, 2]

// Module 15498 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import isMetaQuest from "isMetaQuest" /* 1608 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import isInAppMessageSoundsEnabled from "isInAppMessageSoundsEnabled" /* 10109 */;
import createToggle from "createToggle" /* 11473 */;

({ setInAppMessageSoundsEnabled, useInAppMessageSoundsEnabled } = isInAppMessageSoundsEnabled);
const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jLCRyj);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["wls+Ax"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: isMetaQuest.isMetaQuest
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.jLCRyj);
  },
  useDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["wls+Ax"]);
  },
  parent: MobileUserSettings.MobileUserSettings.NOTIFICATIONS,
  useValue: useInAppMessageSoundsEnabled,
  onValueChange: setInAppMessageSoundsEnabled,
  usePredicate: isMetaQuest.isMetaQuest
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/InAppMessageSoundsSetting.tsx");

export default toggle;
