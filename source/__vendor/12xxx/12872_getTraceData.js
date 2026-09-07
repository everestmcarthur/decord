// Module ID: 12872
// Function ID: 12873
// Name: getTraceData
// Dependencies: [12797, 12800, 12829, 12815, 12828, 12849, 12819, 12820, 12806, 12837, 12814, 12813, 12801]
// Exports: getTraceData

// Module 12872 (getTraceData)
import errorCallback from "errorCallback" /* 12797 */;
import getClient from "getClient" /* 12828 */;
import __SENTRY_DEBUG__ from "__SENTRY_DEBUG__" /* 12800 */;
import dateTimestampInSeconds from "dateTimestampInSeconds" /* 12815 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = getClient.getClient();
  const obj2 = getClient;
  if (obj3.isEnabled()) {
    if (client) {
      let tmpResult = tmp(12819);
      const mainCarrier = tmpResult.getMainCarrier();
      tmpResult = tmp(12820);
      const asyncContextStrategy = tmpResult.getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12828).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12806).getActiveSpan();
          const tmpResult2 = tmp(12806);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12806).spanToTraceHeader(span);
          const tmpResult3 = tmp(12806);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12813).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult4 = tmp(12813);
        }
        const tmpResult5 = tmp(12837);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult5.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult1 = tmp(12828);
        const result = tmp(12814).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12813).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          obj = { "sentry-trace": null, baggage: null };
          obj[0] = spanToTraceHeaderResult;
          obj[1] = result;
        } else {
          const logger = tmp(12801).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj = {};
        }
        return obj;
      }
    }
  }
  return {};
};
