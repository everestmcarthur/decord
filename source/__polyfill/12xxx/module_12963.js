// Module ID: 12963
// Function ID: 12964
// Dependencies: [12888, 12891, 12920, 12906, 12919, 12940, 12910, 12911, 12897, 12928, 12905, 12904, 12892]
// Exports: getTraceData

// Module 12963
import errorCallback from "errorCallback" /* 12888 */;
import _mod12919 from "module_12919" /* 12919 */;
import "module_12891";
import __SENTRY_DEBUG__ from "module_12920" /* 12920 */;
import dateTimestampInSeconds from "module_12906" /* 12906 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12919.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12910).getMainCarrier();
      const tmpResult = tmp(12910);
      const asyncContextStrategy = tmp(12911).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12919).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12897).getActiveSpan();
          const tmpResult10 = tmp(12897);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12897).spanToTraceHeader(span);
          const tmpResult11 = tmp(12897);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12904).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12904);
        }
        const tmpResult13 = tmp(12928);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12919);
        const result = tmp(12905).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12904).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12892).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12911);
    }
  }
  return {};
};
