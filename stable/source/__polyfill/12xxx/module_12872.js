// Module ID: 12872
// Function ID: 12873
// Dependencies: [12797, 12800, 12829, 12815, 12828, 12849, 12819, 12820, 12806, 12837, 12814, 12813, 12801]
// Exports: getTraceData

// Module 12872
import errorCallback from "errorCallback" /* 12797 */;
import _mod12828 from "module_12828" /* 12828 */;
import "module_12800";
import __SENTRY_DEBUG__ from "module_12829" /* 12829 */;
import dateTimestampInSeconds from "module_12815" /* 12815 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12828.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12819).getMainCarrier();
      const tmpResult = tmp(12819);
      const asyncContextStrategy = tmp(12820).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12828).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12806).getActiveSpan();
          const tmpResult10 = tmp(12806);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12806).spanToTraceHeader(span);
          const tmpResult11 = tmp(12806);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12813).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12813);
        }
        const tmpResult13 = tmp(12837);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12828);
        const result = tmp(12814).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12813).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12801).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12820);
    }
  }
  return {};
};
