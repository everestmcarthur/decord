// Module ID: 15256
// Function ID: 15257
// Name: SoundboardVolumeSetting
// Dependencies: [7976, 11473, 1114, 7344, 7338, 7182, 2]

// Module 15256 (SoundboardVolumeSetting)
import util from "util" /* 1114 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7338 */;
import SoundboardUtils from "SoundboardUtils" /* 7344 */;
import SettingsConstants from "SettingsConstants" /* 7976 */;
import SettingBuilders from "SettingBuilders" /* 11473 */;
import size from "module_2" /* 2 */;

const volumeSlider = SettingBuilders.createVolumeSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.kbFsAD);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  maximum: 100,
  useValue: SoundboardUtils.getAmplitudinalSoundboardVolume,
  onValueChange(volume) {
    const items = [AnalyticsLocationDefault.USER_SETTINGS];
    return SoundboardActionCreators.updateUserSoundboardVolume(volume, items);
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SoundboardVolumeSetting.tsx");

export default volumeSlider;
