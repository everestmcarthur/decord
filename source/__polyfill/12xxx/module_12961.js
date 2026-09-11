// Module ID: 12961
// Function ID: 12962
// Dependencies: [12886, 12889, 12918, 12904, 12917, 12938, 12908, 12909, 12895, 12926, 12903, 12902, 12890]
// Exports: getTraceData

// Module 12961
import errorCallback from "errorCallback" /* 12886 */;
import _mod12917 from "module_12917" /* 12917 */;
import "module_12889";
import __SENTRY_DEBUG__ from "module_12918" /* 12918 */;
import dateTimestampInSeconds from "module_12904" /* 12904 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12917.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12908).getMainCarrier();
      const tmpResult = tmp(12908);
      const asyncContextStrategy = tmp(12909).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12917).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12895).getActiveSpan();
          const tmpResult10 = tmp(12895);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12895).spanToTraceHeader(span);
          const tmpResult11 = tmp(12895);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12902).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12902);
        }
        const tmpResult13 = tmp(12926);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12917);
        const result = tmp(12903).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12902).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12890).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12909);
    }
  }
  return {};
};
