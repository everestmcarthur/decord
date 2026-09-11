// Module ID: 15314
// Function ID: 15315
// Name: SoundboardVolumeSetting
// Dependencies: [8050, 11564, 1114, 7418, 7412, 7256, 2]

// Module 15314 (SoundboardVolumeSetting)
import util from "util" /* 1114 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7256 */;
import SoundboardActionCreators from "SoundboardActionCreators" /* 7412 */;
import SoundboardUtils from "SoundboardUtils" /* 7418 */;
import SettingsConstants from "SettingsConstants" /* 8050 */;
import SettingBuilders from "SettingBuilders" /* 11564 */;
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
