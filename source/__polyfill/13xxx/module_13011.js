// Module ID: 13011
// Function ID: 13012
// Dependencies: [12936, 12939, 12968, 12954, 12967, 12988, 12958, 12959, 12945, 12976, 12953, 12952, 12940]
// Exports: getTraceData

// Module 13011
import errorCallback from "errorCallback" /* 12936 */;
import _mod12967 from "module_12967" /* 12967 */;
import "module_12939";
import __SENTRY_DEBUG__ from "module_12968" /* 12968 */;
import dateTimestampInSeconds from "module_12954" /* 12954 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12967.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12958).getMainCarrier();
      const tmpResult = tmp(12958);
      const asyncContextStrategy = tmp(12959).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12967).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12945).getActiveSpan();
          const tmpResult10 = tmp(12945);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12945).spanToTraceHeader(span);
          const tmpResult11 = tmp(12945);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12952).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12952);
        }
        const tmpResult13 = tmp(12976);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12967);
        const result = tmp(12953).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12952).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12940).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12959);
    }
  }
  return {};
};
