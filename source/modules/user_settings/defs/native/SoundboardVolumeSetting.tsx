// Module ID: 15256
// Function ID: 15257
// Name: volumeSlider
// Dependencies: [7975, 11473, 1114, 7344, 7338, 7182, 2]

// Module 15256 (volumeSlider)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 7182 */;
import _fetchDefaultSoundsFromApi2 from "_fetchDefaultSoundsFromApi2" /* 7338 */;
import hasPermissionToPlaySound from "hasPermissionToPlaySound" /* 7344 */;
import MobileUserSettings from "MobileUserSettings" /* 7975 */;
import createToggle from "createToggle" /* 11473 */;

const volumeSlider = createToggle.createVolumeSlider({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kbFsAD);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: hasPermissionToPlaySound.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHERDefault.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2.updateUserSoundboardVolume(volume, items);
  }
});
const obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.kbFsAD);
  },
  parent: MobileUserSettings.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: hasPermissionToPlaySound.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [QUICK_SWITCHERDefault.USER_SETTINGS];
    return _fetchDefaultSoundsFromApi2.updateUserSoundboardVolume(volume, items);
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;
