// Module ID: 12990
// Function ID: 12991
// Dependencies: [12919, 12920, 12892]

// Module 12990
import _mod12919 from "module_12919" /* 12919 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12919.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12920).DEBUG_BUILD) {
          const logger3 = tmp(12892).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12920).DEBUG_BUILD) {
        const logger2 = tmp(12892).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12920).DEBUG_BUILD) {
      const logger = tmp(12892).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12919.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12920).DEBUG_BUILD) {
          const logger3 = tmp(12892).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12920).DEBUG_BUILD) {
        const logger2 = tmp(12892).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12920).DEBUG_BUILD) {
      const logger = tmp(12892).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
