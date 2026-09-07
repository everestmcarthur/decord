// Module ID: 9600
// Function ID: 9601
// Name: useVideoStreamError
// Dependencies: [502, 9601, 4585, 504, 9115, 2]
// Exports: default, useVideoStreamErrorContext

// Module 9600 (useVideoStreamError)
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "isAVErrorContextOfType" /* 9601 */;
import { MediaEngineContextTypes } from "DesktopSources" /* 4585 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default function useVideoStreamError(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let items = [closure_3, closure_2];
  const stateFromStores = _require(504).useStateFromStores(items, () => {
    if (closure_1_2.getId() !== dependencyMap) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9115).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9115).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (callback === closure_1_4.STREAM) {
      let activeErrorsOfType = closure_1_3.getActiveErrorsOfType(callback(9115).AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = closure_1_3);
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  return type;
};
export const useVideoStreamErrorContext = function useVideoStreamErrorContext(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const items = [closure_3, closure_2];
  return _require(504).useStateFromStores(items, () => {
    if (closure_1_2.getId() !== dependencyMap) {
      const items = [];
      let arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9115).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      arraySpreadResult = HermesBuiltin.arraySpread(closure_1_3.getActiveErrorsOfType(callback(9115).AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult);
      items[Symbol.iterator]();
    }
    if (callback === closure_1_4.STREAM) {
      let activeErrorsOfType = closure_1_3.getActiveErrorsOfType(callback(9115).AVError.SCREENSHARE_OS_ERROR);
    } else {
      activeErrorsOfType = [];
    }
    ({ getActiveErrorsOfType, getActiveErrorsOfType: getActiveErrorsOfType2 } = closure_1_3);
  });
};
