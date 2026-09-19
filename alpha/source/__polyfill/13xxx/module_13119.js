// Module ID: 13119
// Function ID: 13120
// Dependencies: [13044, 13047, 13076, 13062, 13075, 13096, 13066, 13067, 13053, 13084, 13061, 13060, 13048]
// Exports: getTraceData

// Module 13119
import errorCallback from "errorCallback" /* 13044 */;
import _mod13075 from "module_13075" /* 13075 */;
import "module_13047";
import __SENTRY_DEBUG__ from "module_13076" /* 13076 */;
import dateTimestampInSeconds from "module_13062" /* 13062 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13075.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(13066).getMainCarrier();
      const tmpResult = tmp(13066);
      const asyncContextStrategy = tmp(13067).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(13075).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(13053).getActiveSpan();
          const tmpResult10 = tmp(13053);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(13053).spanToTraceHeader(span);
          const tmpResult11 = tmp(13053);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(13060).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(13060);
        }
        const tmpResult13 = tmp(13084);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(13075);
        const result = tmp(13061).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13060).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(13048).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(13067);
    }
  }
  return {};
};
