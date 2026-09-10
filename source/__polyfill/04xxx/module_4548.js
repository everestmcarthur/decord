// Module ID: 4548
// Function ID: 4549
// Dependencies: [19, 4545, 4549]
// Exports: useHaptics

// Module 4548
import _mod19 from "module_19" /* 19 */;
import _modDef4545 from "module_4545" /* 4545 */;

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
      _modDef4545.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4545.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4545).stop();
    },
    isSupported() {
      return closure_1_1(4545).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4549).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4545.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4545.setEnabled,
    isEnabled: _modDef4545.isEnabled,
    getSystemHapticStatus: _modDef4545.getSystemHapticStatus,
    playAHAP: _modDef4545.playAHAP
  }), items);
};
