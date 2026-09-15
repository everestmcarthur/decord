// Module ID: 13003
// Function ID: 13004
// Dependencies: [12928, 12931, 12960, 12946, 12959, 12980, 12950, 12951, 12937, 12968, 12945, 12944, 12932]
// Exports: getTraceData

// Module 13003
import errorCallback from "errorCallback" /* 12928 */;
import _mod12959 from "module_12959" /* 12959 */;
import "module_12931";
import __SENTRY_DEBUG__ from "module_12960" /* 12960 */;
import dateTimestampInSeconds from "module_12946" /* 12946 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12959.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12950).getMainCarrier();
      const tmpResult = tmp(12950);
      const asyncContextStrategy = tmp(12951).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12959).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12937).getActiveSpan();
          const tmpResult10 = tmp(12937);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12937).spanToTraceHeader(span);
          const tmpResult11 = tmp(12937);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12944).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12944);
        }
        const tmpResult13 = tmp(12968);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12959);
        const result = tmp(12945).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12944).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12932).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12951);
    }
  }
  return {};
};
