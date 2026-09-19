// Module ID: 10212
// Function ID: 10213
// Name: canStreamWithSettings
// Dependencies: [4803, 10213, 10214, 2]
// Exports: default

// Module 10212 (canStreamWithSettings)
import GoLiveAutoQualityExperiment from "GoLiveAutoQualityExperiment" /* 10213 */;
import canUseStreamSettingDefault from "canUseStreamSetting" /* 10214 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4803 */;
import size from "module_2" /* 2 */;

({ ApplicationStreamSettingRequirements: c3, ApplicationStreamPresets: closure_4 } = StreamSettingsConstants);
const result = size.fileFinishedImporting("modules/go_live/utils/canStreamWithSettings.tsx");

export default function canStreamWithSettings(arg0, arg1, arg2, arg3, arg4, arg5) {
  if (arg0 === constants.PRESET_AUTO) {
    return GoLiveAutoQualityExperiment.getGoLiveAutoQualityExperimentConfig({ location: "canStreamWithSettings" }).allowAutoQuality;
  } else {
    const iter = dependencyMap[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if (null == nextResult.preset) {
        if (arg1 === tmp4.resolution) {
          if (arg2 === tmp4.fps) {
            if (canUseStreamSettingDefault(tmp4, arg3, arg4, arg5)) {
              iter.return();
              let flag = true;
              return true;
            }
          }
        }
      }
      continue;
    }
    return false;
  }
};
