// Module ID: 12965
// Function ID: 12966
// Dependencies: [12955, 12932, 12927]
// Exports: logSpanEnd, logSpanStart

// Module 12965
import _mod12955 from "module_12955" /* 12955 */;

require = arg1;
const dependencyMap = arg6;

export const logSpanEnd = function logSpanEnd(spanContext) {
  if (_mod12955.DEBUG_BUILD) {
    const spanToJSONResult = tmp(12932).spanToJSON(spanContext);
    const description = spanToJSONResult.description;
    let str = "< unknown name >";
    if (undefined !== description) {
      str = description;
    }
    const op = spanToJSONResult.op;
    let str2 = "< unknown op >";
    if (undefined !== op) {
      str2 = op;
    }
    const spanId = spanContext.spanContext().spanId;
    const tmpResult = tmp(12932);
    let str3 = "";
    if (tmpResult2.getRootSpan(spanContext) === spanContext) {
      str3 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const combined = "[Tracing] Finishing \"" + str2 + "\" " + str3 + "span \"" + str + "\" with ID " + spanId;
    const logger = tmp(12927).logger;
    logger.log(combined);
    tmpResult2 = tmp(12932);
  }
};
export const logSpanStart = function logSpanStart(spanContext) {
  if (_mod12955.DEBUG_BUILD) {
    const spanToJSONResult = tmp(12932).spanToJSON(spanContext);
    const description = spanToJSONResult.description;
    let str = "< unknown name >";
    if (undefined !== description) {
      str = description;
    }
    const op = spanToJSONResult.op;
    let str2 = "< unknown op >";
    if (undefined !== op) {
      str2 = op;
    }
    const parent_span_id = spanToJSONResult.parent_span_id;
    const tmpResult = tmp(12932);
    const tmpResult4 = tmp(12932);
    const spanIsSampledResult = tmp(12932).spanIsSampled(spanContext);
    const rootSpan = tmp(12932).getRootSpan(spanContext);
    let str3 = "unsampled";
    if (spanIsSampledResult) {
      str3 = "sampled";
    }
    let str5 = "";
    if (rootSpan === spanContext) {
      str5 = "root ";
    }
    const _HermesInternal = HermesInternal;
    const _HermesInternal2 = HermesInternal;
    const combined = "[Tracing] Starting " + str3 + " " + str5 + "span";
    const items = ["op: " + str2, , ];
    const _HermesInternal3 = HermesInternal;
    items[1] = "name: " + str;
    const _HermesInternal4 = HermesInternal;
    items[2] = "ID: " + spanContext.spanContext().spanId;
    if (parent_span_id) {
      const _HermesInternal5 = HermesInternal;
      items.push("parent ID: " + parent_span_id);
    }
    if (rootSpan !== spanContext) {
      const tmpResult6 = tmp(12932);
      ({ op: op2, description: description2 } = tmp(12932).spanToJSON(rootSpan));
      const _HermesInternal6 = HermesInternal;
      items.push("root ID: " + rootSpan.spanContext().spanId);
      if (op2) {
        const _HermesInternal7 = HermesInternal;
        items.push("root op: " + op2);
      }
      if (description2) {
        const _HermesInternal8 = HermesInternal;
        items.push("root description: " + description2);
      }
      const spanToJSONResult1 = tmp(12932).spanToJSON(rootSpan);
    }
    const logger = tmp(12927).logger;
    const _HermesInternal9 = HermesInternal;
    logger.log("" + combined + "\n  " + items.join("\n  "));
    const tmpResult5 = tmp(12932);
  }
};
