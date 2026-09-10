// Module ID: 12898
// Function ID: 12899
// Dependencies: [12823, 12826, 12855, 12841, 12854, 12875, 12845, 12846, 12832, 12863, 12840, 12839, 12827]
// Exports: getTraceData

// Module 12898
import errorCallback from "errorCallback" /* 12823 */;
import _mod12854 from "module_12854" /* 12854 */;
import "module_12826";
import __SENTRY_DEBUG__ from "module_12855" /* 12855 */;
import dateTimestampInSeconds from "module_12841" /* 12841 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12854.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12845).getMainCarrier();
      const tmpResult = tmp(12845);
      const asyncContextStrategy = tmp(12846).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12854).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12832).getActiveSpan();
          const tmpResult10 = tmp(12832);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12832).spanToTraceHeader(span);
          const tmpResult11 = tmp(12832);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12839).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12839);
        }
        const tmpResult13 = tmp(12863);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12854);
        const result = tmp(12840).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12839).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12827).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12846);
    }
  }
  return {};
};
