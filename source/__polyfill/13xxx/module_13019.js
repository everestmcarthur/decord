// Module ID: 13019
// Function ID: 13020
// Dependencies: [12944, 12947, 12976, 12962, 12975, 12996, 12966, 12967, 12953, 12984, 12961, 12960, 12948]
// Exports: getTraceData

// Module 13019
import errorCallback from "errorCallback" /* 12944 */;
import _mod12975 from "module_12975" /* 12975 */;
import "module_12947";
import __SENTRY_DEBUG__ from "module_12976" /* 12976 */;
import dateTimestampInSeconds from "module_12962" /* 12962 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12975.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12966).getMainCarrier();
      const tmpResult = tmp(12966);
      const asyncContextStrategy = tmp(12967).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12975).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12953).getActiveSpan();
          const tmpResult10 = tmp(12953);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12953).spanToTraceHeader(span);
          const tmpResult11 = tmp(12953);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12960).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12960);
        }
        const tmpResult13 = tmp(12984);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12975);
        const result = tmp(12961).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12960).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12948).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12967);
    }
  }
  return {};
};
