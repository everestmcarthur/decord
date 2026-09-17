// Module ID: 13926
// Function ID: 13927
// Name: noise_cancellation/KrispUtils
// Dependencies: [1911, 2]
// Exports: getKrispModel, setKrispModelOverride, setKrispSuppressionLevel

// Module 13926 (noise_cancellation/KrispUtils)
import inject from "inject" /* 1911 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/noise_cancellation/native/KrispUtils.tsx");

export const getKrispModel = function getKrispModel() {
  return new Promise((fn) => {
    closure_0 = fn;
    const voiceEngine = inject.getVoiceEngine();
    if (null != voiceEngine.getNcModelFilename) {
      const ncModelFilename = voiceEngine.getNcModelFilename((arg0) => closure_0(arg0));
    } else {
      fn(null);
    }
  });
};
export function setKrispSuppressionLevel() {

}
export function setKrispModelOverride() {

}
