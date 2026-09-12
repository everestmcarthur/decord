// Module ID: 15334
// Function ID: 15335
// Name: OutputVolumeSetting
// Dependencies: [1908, 8079, 504, 11601, 1114, 9218, 10111, 2]

// Module 15334 (OutputVolumeSetting)
import initialize from "initialize" /* 504 */;
import util from "util" /* 1114 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9218 */;
import MobileAudioOutputExperimentDefault from "MobileAudioOutputExperiment" /* 10111 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;

require = fn;
const SettingBuilders = fn(11601);
const volumeSlider = SettingBuilders.createVolumeSlider({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.xPHVBs);
  },
  parent: fn(8079).MobileUserSettings.VOICE,
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
