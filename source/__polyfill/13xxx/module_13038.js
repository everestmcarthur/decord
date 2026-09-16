// Module ID: 13038
// Function ID: 13039
// Dependencies: [12967, 12968, 12940]

// Module 13038
import _mod12967 from "module_12967" /* 12967 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12967.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12968).DEBUG_BUILD) {
          const logger3 = tmp(12940).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12968).DEBUG_BUILD) {
        const logger2 = tmp(12940).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12968).DEBUG_BUILD) {
      const logger = tmp(12940).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12967.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12968).DEBUG_BUILD) {
          const logger3 = tmp(12940).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12968).DEBUG_BUILD) {
        const logger2 = tmp(12940).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12968).DEBUG_BUILD) {
      const logger = tmp(12940).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
