// Module ID: 9645
// Function ID: 9646
// Name: WakeLock
// Dependencies: [19, 17, 1115, 9646, 2]
// Exports: default, useWakeLock

// Module 9645 (WakeLock)
import NativeScreenWakeLockModuleDefault from "NativeScreenWakeLockModule" /* 9646 */;
import noop from "module_19" /* 19 */;

const require = fn;
const NativeModules = fn(17).NativeModules;
const size = fn(2);
const result = size.fileFinishedImporting("modules/device/native/WakeLock.tsx");

export default function WakeLock(wakeLockKey) {
  wakeLockKey = wakeLockKey.wakeLockKey;
  const items = [wakeLockKey];
  const effect = noop.useEffect(() => {
    if (obj.isAndroid()) {
      const lock = NativeScreenWakeLockModuleDefault.requestLock(wakeLockKey);
    } else {
      let ScreenWakeLockManager = NativeModules.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(wakeLockKey);
    }
    return () => {
      if (obj.isAndroid()) {
        NativeScreenWakeLockModuleDefault.releaseLock(wakeLockKey);
      } else {
        const ScreenWakeLockManager = NativeModules.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(wakeLockKey);
      }
    };
  }, items);
  return null;
};
export const useWakeLock = function useWakeLock(VoiceMessageOverlay) {
  closure_0 = VoiceMessageOverlay;
  const items = [VoiceMessageOverlay];
  const effect = noop.useEffect(() => {
    if (obj.isAndroid()) {
      const lock = NativeScreenWakeLockModuleDefault.requestLock(wakeLockKey);
    } else {
      let ScreenWakeLockManager = NativeModules.ScreenWakeLockManager;
      const lock1 = ScreenWakeLockManager.requestLock(wakeLockKey);
    }
    return () => {
      if (obj.isAndroid()) {
        NativeScreenWakeLockModuleDefault.releaseLock(wakeLockKey);
      } else {
        const ScreenWakeLockManager = NativeModules.ScreenWakeLockManager;
        ScreenWakeLockManager.releaseLock(wakeLockKey);
      }
    };
  }, items);
};
