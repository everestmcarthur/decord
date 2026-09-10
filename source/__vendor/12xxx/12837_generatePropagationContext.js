// Module ID: 12837
// Function ID: 12838
// Name: generatePropagationContext
// Dependencies: [12838]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12837 (generatePropagationContext)
import _mod12838 from "module_12838" /* 12838 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12838.uuid4(), spanId: null };
  obj.spanId = _mod12838.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12838.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12838.uuid4();
};
