// Module ID: 13110
// Function ID: 13111
// Dependencies: [13035, 13038, 13067, 13053, 13066, 13087, 13057, 13058, 13044, 13075, 13052, 13051, 13039]
// Exports: getTraceData

// Module 13110
import errorCallback from "errorCallback" /* 13035 */;
import _mod13066 from "module_13066" /* 13066 */;
import "module_13038";
import __SENTRY_DEBUG__ from "module_13067" /* 13067 */;
import dateTimestampInSeconds from "module_13053" /* 13053 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod13066.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(13057).getMainCarrier();
      const tmpResult = tmp(13057);
      const asyncContextStrategy = tmp(13058).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(13066).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(13044).getActiveSpan();
          const tmpResult10 = tmp(13044);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(13044).spanToTraceHeader(span);
          const tmpResult11 = tmp(13044);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(13051).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(13051);
        }
        const tmpResult13 = tmp(13075);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(13066);
        const result = tmp(13052).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(13051).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(13039).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(13058);
    }
  }
  return {};
};
