// Module ID: 13030
// Function ID: 13031
// Dependencies: [12959, 12960, 12932]

// Module 13030
import _mod12959 from "module_12959" /* 12959 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12959.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12960).DEBUG_BUILD) {
          const logger3 = tmp(12932).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12960).DEBUG_BUILD) {
        const logger2 = tmp(12932).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12960).DEBUG_BUILD) {
      const logger = tmp(12932).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12959.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12960).DEBUG_BUILD) {
          const logger3 = tmp(12932).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12960).DEBUG_BUILD) {
        const logger2 = tmp(12932).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12960).DEBUG_BUILD) {
      const logger = tmp(12932).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
