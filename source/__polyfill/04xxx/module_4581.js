// Module ID: 4581
// Function ID: 4582
// Dependencies: [19, 4578, 4582]
// Exports: useHaptics

// Module 4581
import _mod19 from "module_19" /* 19 */;
import _modDef4578 from "module_4578" /* 4578 */;

const useMemo = _mod19.useMemo;

export const useHaptics = function useHaptics(enableVibrateFallback) {
  closure_0 = enableVibrateFallback;
  let prop;
  if (enableVibrateFallback != null) {
    prop = enableVibrateFallback.enableVibrateFallback;
  }
  let prop1;
  if (enableVibrateFallback != null) {
    prop1 = enableVibrateFallback.ignoreAndroidSystemSettings;
  }
  const items = [prop, prop1];
  return useMemo(() => ({
    trigger(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4578.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4578.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4578).stop();
    },
    isSupported() {
      return closure_1_1(4578).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4582).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4578.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4578.setEnabled,
    isEnabled: _modDef4578.isEnabled,
    getSystemHapticStatus: _modDef4578.getSystemHapticStatus,
    playAHAP: _modDef4578.playAHAP
  }), items);
};
