// Module ID: 12997
// Function ID: 12998
// Dependencies: [12922, 12925, 12954, 12940, 12953, 12974, 12944, 12945, 12931, 12962, 12939, 12938, 12926]
// Exports: getTraceData

// Module 12997
import errorCallback from "errorCallback" /* 12922 */;
import _mod12953 from "module_12953" /* 12953 */;
import "module_12925";
import __SENTRY_DEBUG__ from "module_12954" /* 12954 */;
import dateTimestampInSeconds from "module_12940" /* 12940 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12953.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12944).getMainCarrier();
      const tmpResult = tmp(12944);
      const asyncContextStrategy = tmp(12945).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12953).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12931).getActiveSpan();
          const tmpResult10 = tmp(12931);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12931).spanToTraceHeader(span);
          const tmpResult11 = tmp(12931);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12938).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12938);
        }
        const tmpResult13 = tmp(12962);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12953);
        const result = tmp(12939).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12938).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12926).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12945);
    }
  }
  return {};
};
