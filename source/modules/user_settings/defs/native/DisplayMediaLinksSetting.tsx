// Module ID: 15463
// Function ID: 15464
// Name: toggle
// Dependencies: [7975, 11473, 1114, 1935, 2]

// Module 15463 (toggle)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import explicitContentFromProto from "explicitContentFromProto" /* 1935 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

const toggle = createToggle.createToggle({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.U47N1p);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue: explicitContentFromProto.InlineEmbedMedia.useSetting,
  onValueChange: explicitContentFromProto.InlineEmbedMedia.updateSetting
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.U47N1p);
  },
  parent: MobileUserSettings.MobileUserSettings.CHAT,
  useValue: explicitContentFromProto.InlineEmbedMedia.useSetting,
  onValueChange: explicitContentFromProto.InlineEmbedMedia.updateSetting
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DisplayMediaLinksSetting.tsx");

export default toggle;
