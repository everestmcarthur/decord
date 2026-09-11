// Module ID: 12988
// Function ID: 12989
// Dependencies: [12917, 12918, 12890]

// Module 12988
import _mod12917 from "module_12917" /* 12917 */;

require = arg1;
const dependencyMap = arg6;

export const profiler = {
  startProfiler() {
    const client = _mod12917.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.start();
        } else if (tmp(12918).DEBUG_BUILD) {
          const logger3 = tmp(12890).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12918).DEBUG_BUILD) {
        const logger2 = tmp(12890).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12918).DEBUG_BUILD) {
      const logger = tmp(12890).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  },
  stopProfiler() {
    const client = _mod12917.getClient();
    if (client) {
      const integrationByName = client.getIntegrationByName("ProfilingIntegration");
      if (integrationByName) {
        if (tmp6) {
          const _profiler = integrationByName._profiler;
          _profiler.stop();
        } else if (tmp(12918).DEBUG_BUILD) {
          const logger3 = tmp(12890).logger;
          logger3.warn("Profiler is not available on profiling integration.");
        }
        tmp6 = integrationByName && undefined !== integrationByName._profiler && typeof integrationByName._profiler.start === "function" && typeof integrationByName._profiler.stop === "function";
      } else if (tmp(12918).DEBUG_BUILD) {
        const logger2 = tmp(12890).logger;
        logger2.warn("ProfilingIntegration is not available");
      }
    } else if (tmp(12918).DEBUG_BUILD) {
      const logger = tmp(12890).logger;
      logger.warn("No Sentry client available, profiling is not started");
    }
  }
};
