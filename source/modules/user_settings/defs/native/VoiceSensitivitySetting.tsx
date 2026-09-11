// Module ID: 15311
// Function ID: 15312
// Name: VoiceSensitivitySetting
// Dependencies: [17, 1908, 8049, 21, 4606, 504, 10074, 9179, 11562, 1114, 2]

// Module 15311 (VoiceSensitivitySetting)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import util from "util" /* 1114 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import AudioActionCreatorsDefault from "AudioActionCreators" /* 9179 */;
import VoiceSensitivityDefault from "VoiceSensitivity" /* 10074 */;
import MediaEngineStore from "MediaEngineStore" /* 1908 */;
import createStyles from "createStyles" /* 4606 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let closure_6 = createStyles.createStyles({ slider: { marginTop: 8 } });
const obj = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sqUm+k"]);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    const tmp = closure_6();
    const items = [MediaEngineStore];
    const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({ inputMode: MediaEngineStore.getMode(), vadThreshold: MediaEngineStore.getModeOptions().threshold, vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    const obj2 = {
      style: tmp.slider,
      children: jsx(VoiceSensitivityDefault, {
        auto: vadAutoThreshold,
        threshold: vadThreshold,
        onThresholdChange(threshold) {
          return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
        }
      })
    };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    return <View style={tmp.slider}>{jsx(VoiceSensitivityDefault, {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
      }
    })}</View>;
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
};
const result = size.fileFinishedImporting("modules/user_settings/defs/native/VoiceSensitivitySetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["sqUm+k"]);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  useDescription: function useVoiceSensitivitySettingDescription() {
    const tmp = closure_6();
    const items = [MediaEngineStore];
    const stateFromStoresObject = inputMode(504).useStateFromStoresObject(items, () => ({ inputMode: MediaEngineStore.getMode(), vadThreshold: MediaEngineStore.getModeOptions().threshold, vadAutoThreshold: MediaEngineStore.getModeOptions().autoThreshold }));
    inputMode = stateFromStoresObject.inputMode;
    const obj2 = {
      style: tmp.slider,
      children: jsx(VoiceSensitivityDefault, {
        auto: vadAutoThreshold,
        threshold: vadThreshold,
        onThresholdChange(threshold) {
          return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
        }
      })
    };
    ({ vadThreshold, vadAutoThreshold } = stateFromStoresObject);
    return <View style={tmp.slider}>{jsx(VoiceSensitivityDefault, {
      auto: vadAutoThreshold,
      threshold: vadThreshold,
      onThresholdChange(threshold) {
        return AudioActionCreatorsDefault.setMode(inputMode, { threshold });
      }
    })}</View>;
  },
  useSearchTerms() {
    const intl = util.intl;
    const items = [intl.string(util.t.nuFtHH)];
    return items;
  }
});
