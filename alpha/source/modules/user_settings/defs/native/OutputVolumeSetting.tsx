// Module ID: 15515
// Function ID: 15516
// Name: OutputVolumeSetting
// Dependencies: [1992, 8232, 504, 11723, 1115, 9910, 10238, 2]

// Module 15515 (OutputVolumeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1115 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9910 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10238 */;
import MediaEngineStore from "MediaEngineStore" /* 1992 */;

require = fn;
const SettingBuilders = fn(11723);
const volumeSlider = SettingBuilders.createVolumeSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xPHVBs);
  },
  parent: fn(8232).MobileUserSettings.VOICE,
  maximum: 200,
  useValue: function useOutputVolumeSettingValue() {
    const items = [MediaEngineStore];
    return initialize.useStateFromStores(items, () => outputVolume.getOutputVolume());
  },
  onValueChange: AudioActionCreatorsDefault.setOutputVolume,
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t["3182VD"]), ];
    const intl2 = util.intl;
    items[1] = intl2.string(util.t["DGq/PR"]);
    return items;
  },
  usePredicate() {
    return MobileAudioOutputExperimentDefault.useConfig({ location: "OutputVolumeSetting" }).audioOutputPresent;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/OutputVolumeSetting.tsx");

export default volumeSlider;
