// Module ID: 4534
// Function ID: 4535
// Dependencies: [19, 4531, 4535]
// Exports: useHaptics

// Module 4534
import _mod19 from "module_19" /* 19 */;
import _modDef4531 from "module_4531" /* 4531 */;

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
      _modDef4531.trigger(arg0, {});
    },
    triggerPattern(arg0, arg1) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg1);
      _modDef4531.triggerPattern(arg0, {});
    },
    stop() {
      closure_1_1(4531).stop();
    },
    isSupported() {
      return closure_1_1(4531).isSupported();
    },
    playHaptic(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      return closure_0(4535).playHaptic(arg0, arg1, {});
    },
    impact(arg0, arg1, arg2) {
      const merged = Object.assign(enableVibrateFallback);
      const merged1 = Object.assign(arg2);
      _modDef4531.impact(arg0, arg1, {});
    },
    setEnabled: _modDef4531.setEnabled,
    isEnabled: _modDef4531.isEnabled,
    getSystemHapticStatus: _modDef4531.getSystemHapticStatus,
    playAHAP: _modDef4531.playAHAP
  }), items);
};
