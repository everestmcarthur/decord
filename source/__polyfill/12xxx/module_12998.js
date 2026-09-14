// Module ID: 12998
// Function ID: 12999
// Dependencies: [12923, 12926, 12955, 12941, 12954, 12975, 12945, 12946, 12932, 12963, 12940, 12939, 12927]
// Exports: getTraceData

// Module 12998
import errorCallback from "errorCallback" /* 12923 */;
import _mod12954 from "module_12954" /* 12954 */;
import "module_12926";
import __SENTRY_DEBUG__ from "module_12955" /* 12955 */;
import dateTimestampInSeconds from "module_12941" /* 12941 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12954.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12945).getMainCarrier();
      const tmpResult = tmp(12945);
      const asyncContextStrategy = tmp(12946).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12954).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12932).getActiveSpan();
          const tmpResult10 = tmp(12932);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12932).spanToTraceHeader(span);
          const tmpResult11 = tmp(12932);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12939).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12939);
        }
        const tmpResult13 = tmp(12963);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12954);
        const result = tmp(12940).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12939).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12927).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12946);
    }
  }
  return {};
};
