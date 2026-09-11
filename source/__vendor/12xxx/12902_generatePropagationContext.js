// Module ID: 12902
// Function ID: 12903
// Name: generatePropagationContext
// Dependencies: [12903]
// Exports: generatePropagationContext, generateSpanId, generateTraceId

// Module 12902 (generatePropagationContext)
import _mod12903 from "module_12903" /* 12903 */;

require = arg1;
const dependencyMap = arg6;

export const generatePropagationContext = function generatePropagationContext() {
  const obj = { traceId: _mod12903.uuid4(), spanId: null };
  obj.spanId = _mod12903.uuid4().substring(16);
  return obj;
};
export const generateSpanId = function generateSpanId() {
  return _mod12903.uuid4().substring(16);
};
export const generateTraceId = function generateTraceId() {
  return _mod12903.uuid4();
};
