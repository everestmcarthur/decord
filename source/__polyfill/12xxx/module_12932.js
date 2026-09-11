// Module ID: 12932
// Function ID: 12933
// Dependencies: [12920, 12892]
// Exports: parseSampleRate

// Module 12932
import _mod12892 from "module_12892" /* 12892 */;
import _mod12920 from "module_12920" /* 12920 */;

require = arg1;
const dependencyMap = arg6;

export const parseSampleRate = function parseSampleRate(flag) {
  if (typeof flag === "boolean") {
    const _Number = Number;
    return Number(flag);
  } else {
    let parsed = flag;
    if (typeof flag === "string") {
      const _parseFloat = parseFloat;
      parsed = parseFloat(flag);
    }
    if (typeof parsed === "number") {
      const _isNaN = isNaN;
      if (!isNaN(parsed)) {
        if (parsed >= 0) {
          if (parsed <= 1) {
            return parsed;
          }
        }
      }
    }
    if (_mod12920.DEBUG_BUILD) {
      const logger = _mod12892.logger;
      const _JSON = JSON;
      const json = JSON.stringify(flag);
      const _JSON2 = JSON;
      const _HermesInternal = HermesInternal;
      logger.warn("[Tracing] Given sample rate is invalid. Sample rate must be a boolean or a number between 0 and 1. Got " + json + " of type " + JSON.stringify(typeof flag) + ".");
    }
  }
};
