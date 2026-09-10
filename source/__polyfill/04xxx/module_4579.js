// Module ID: 4579
// Function ID: 4580
// Dependencies: [19, 4576, 4580]
// Exports: useHaptics

// Module 4579
import _mod19 from "module_19" /* 19 */;
import _modDef4576 from "module_4576" /* 4576 */;

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
      _modDef4576.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4576.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4576).stop();
    },
    isSupported() {
      return closure_1_1(4576).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4580).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4576.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4576.setEnabled,
    isEnabled: _modDef4576.isEnabled,
    getSystemHapticStatus: _modDef4576.getSystemHapticStatus,
    playAHAP: _modDef4576.playAHAP
  }), items);
};
