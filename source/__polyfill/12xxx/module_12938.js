// Module ID: 12938
// Function ID: 12939
// Dependencies: [12863, 12866, 12895, 12881, 12894, 12915, 12885, 12886, 12872, 12903, 12880, 12879, 12867]
// Exports: getTraceData

// Module 12938
import errorCallback from "errorCallback" /* 12863 */;
import _mod12894 from "module_12894" /* 12894 */;
import "module_12866";
import __SENTRY_DEBUG__ from "module_12895" /* 12895 */;
import dateTimestampInSeconds from "module_12881" /* 12881 */;

errorCallback;

export const getTraceData = function getTraceData() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const client = _mod12894.getClient();
  if (obj3.isEnabled()) {
    if (client) {
      const mainCarrier = tmp(12885).getMainCarrier();
      const tmpResult = tmp(12885);
      const asyncContextStrategy = tmp(12886).getAsyncContextStrategy(mainCarrier);
      if (asyncContextStrategy.getTraceData) {
        return asyncContextStrategy.getTraceData(obj);
      } else {
        const currentScope = tmp(12894).getCurrentScope();
        let span = obj.span;
        if (!span) {
          span = tmp(12872).getActiveSpan();
          const tmpResult10 = tmp(12872);
        }
        if (span) {
          let spanToTraceHeaderResult = tmp(12872).spanToTraceHeader(span);
          const tmpResult11 = tmp(12872);
        } else {
          const propagationContext = currentScope.getPropagationContext();
          ({ traceId, sampled, spanId } = propagationContext);
          spanToTraceHeaderResult = tmp(12879).generateSentryTraceHeader(traceId, spanId, sampled);
          const tmpResult12 = tmp(12879);
        }
        const tmpResult13 = tmp(12903);
        if (span) {
          let dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromSpan(span);
        } else {
          dynamicSamplingContextFromSpan = tmpResult13.getDynamicSamplingContextFromScope(client, currentScope);
        }
        const tmpResult9 = tmp(12894);
        const result = tmp(12880).dynamicSamplingContextToSentryBaggageHeader(dynamicSamplingContextFromSpan);
        const TRACEPARENT_REGEXP = tmp(12879).TRACEPARENT_REGEXP;
        if (TRACEPARENT_REGEXP.test(spanToTraceHeaderResult)) {
          const obj4 = { "sentry-trace": spanToTraceHeaderResult, baggage: result };
          let obj5 = obj4;
        } else {
          const logger = tmp(12867).logger;
          logger.warn("Invalid sentry-trace data. Cannot generate trace data");
          obj5 = {};
        }
        return obj5;
      }
      const tmpResult8 = tmp(12886);
    }
  }
  return {};
};
