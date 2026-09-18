// Module ID: 17856
// Function ID: 17857
// Name: ApplicationStreamingManager
// Dependencies: [19, 4606, 4607, 4585, 21, 3, 17857, 4905, 17858, 1896, 9964, 9095, 2]

// Module 17856 (ApplicationStreamingManager)
import LoggerDefault from "Logger" /* 3 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4905 */;
import MobileGoLiveUpsellExperimentDefault from "MobileGoLiveUpsellExperiment" /* 9964 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingSettingsStore from "ApplicationStreamingSettingsStore" /* 4606 */;
import ApplicationStreamingManager from "go_live/ApplicationStreamingManager" /* 17857 */;

const require = fn;
const ApplicationStreamPresets = fn(4607).ApplicationStreamPresets;
const MediaEngineContextTypes = fn(4585).MediaEngineContextTypes;
const jsx = fn(21).jsx;
let obj = new LoggerDefault("ApplicationStreamingManager");
obj.enableNativeLogger(true);
class ApplicationStreamingManager extends tmp4 {
}
const prototype = ApplicationStreamingManager.prototype;
prototype["platformShowStreamFull"] = function platformShowStreamFull() {
  actions_AlertActionCreatorsDefault.openLazy({
    importer() {
      return require("asyncRequireImpl")(paths[8], paths.paths).then((result) => {
        closure_0 = result.default;
        return (arg0) => {
          const merged = Object.assign(arg0);
          return closure_2_6(closure_0, {});
        };
      });
    }
  });
};
prototype["platformHandleStreamStart"] = function platformHandleStreamStart(sourceId) {
  sourceId = sourceId.sourceId;
  if (null != sourceId) {
    let setGoLiveSource = importDefault;
    obj = MobileGoLiveUpsellExperimentDefault;
    if (obj.getConfig({ location: "platformHandleStreamStart" }).showMobileGoLiveUpsell) {
      let state = ApplicationStreamingSettingsStore.getState();
    } else {
      state = { preset: ApplicationStreamPresets.PRESET_CUSTOM, resolution: 720, fps: 30, soundshareEnabled: true };
    }
    ({ preset, resolution, fps, soundshareEnabled } = state);
    setGoLiveSource = setGoLiveSource(9095).setGoLiveSource;
    const obj2 = { desktopSettings: null, qualityOptions: null, context: null };
    const obj3 = { sourceId, sound: soundshareEnabled };
    obj2.desktopSettings = obj3;
    const obj4 = { preset, resolution, frameRate: fps };
    obj2.qualityOptions = obj4;
    obj2.context = MediaEngineContextTypes.STREAM;
    setGoLiveSource(obj2);
    const setGoLiveSourceResult = setGoLiveSource(9095);
  } else {
    const _HermesInternal = HermesInternal;
    obj.warn("invalid start_stream: both application + display modes were specified (source-id: " + sourceId + ")");
  }
};
prototype["platformHandleVoiceStateUpdate"] = function platformHandleVoiceStateUpdate() {

};
const applicationStreamingManager = new ApplicationStreamingManager();
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/native/ApplicationStreamingManager.tsx");

export default applicationStreamingManager;
