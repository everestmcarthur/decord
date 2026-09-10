// Module ID: 12925
// Function ID: 12926
// Dependencies: [12854, 12855, 12827]

// Module 12925
import _mod12854 from "module_12854" /* 12854 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12854.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12855).DEBUG_BUILD) {
          const logger3 = tmp(12827).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12855).DEBUG_BUILD) {
        const logger2 = tmp(12827).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12855).DEBUG_BUILD) {
      const logger = tmp(12827).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12854.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12855).DEBUG_BUILD) {
          const logger3 = tmp(12827).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12855).DEBUG_BUILD) {
        const logger2 = tmp(12827).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12855).DEBUG_BUILD) {
      const logger = tmp(12827).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
