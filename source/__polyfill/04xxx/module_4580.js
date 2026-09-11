// Module ID: 4580
// Function ID: 4581
// Dependencies: [19, 4577, 4581]
// Exports: useHaptics

// Module 4580
import _mod19 from "module_19" /* 19 */;
import _modDef4577 from "module_4577" /* 4577 */;

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
      _modDef4577.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4577.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4577).stop();
    },
    isSupported() {
      return closure_1_1(4577).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4581).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4577.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4577.setEnabled,
    isEnabled: _modDef4577.isEnabled,
    getSystemHapticStatus: _modDef4577.getSystemHapticStatus,
    playAHAP: _modDef4577.playAHAP
  }), items);
};
